import React, { Component } from "react";
import axios from "axios";

class NewPlayDate extends Component {
  state = {
    name: "",
    date: "",
    location: "",
  };

  handleInputChange = (event) => {
    const { name, date, location, value } = event.target;
    this.setState({
      [name]: value,
      [date]: value,
      [location]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/playdate", this.state)
      .then((response) => {
        console.log(response.data);
        // When clicking submit will redirect to playdate page
        this.props.history.push("/playdate");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <h1>PlayDate Event</h1>
        <form
          className="text-center border border-light p-5"
          onSubmit={this.handleSubmit}
        >
          <div className="row">
            <input
              className="form-control"
              id="eventName"
              type="text"
              placeholder="Event Name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>
          <br />
          <div className="row">
            <input
              className="form-control"
              id="date"
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.handleInputChange}
            />
          </div>
          <br />
          <div className="row">
            <input
              className="form-control"
              id="location"
              type="text"
              placeholder="Location"
              name="location"
              value={this.state.location}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit" class="btn btn-light-blue">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default NewPlayDate;

// import React from 'react';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import axios from "axios";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// function NewEvent() {
//   const classes = useStyles();

//   React.useEffect(() => {
//     axios
//       .get("/api/newplaydate")
//       .then((response) => {
//         console.log(response.data);
//         // setState({
//         //   events: response.data.data,
//         // });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         {/* <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar> */}
//         <Typography component="h1" variant="h5">
//           Create PlayDate
//         </Typography>
//         <form className={classes.form} noValidate>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="title"
//             label="Title:"
//             name="title"
//             autoComplete="title"
//             autoFocus
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="location"
//             label="Location:"
//             id="location"
//             autoComplete="location"
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="date"
//             label="Date:"
//             id="date"
//             autoComplete="date"
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="description"
//             label="Description:"
//             id="description"
//             autoComplete="description"
//           />

//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Create
//           </Button>
//           <Grid container>
//             <Grid item xs>
//             </Grid>
//             <Grid item>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//       <Box mt={8}>
//       </Box>
//     </Container>
//   );
// }
// export default NewEvent;
