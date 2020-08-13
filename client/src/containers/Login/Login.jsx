import React, { useState } from 'react';
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const status = useContext(StatusContext);

  // const user = useContext(UserContext);

  // useEffect(() => {
  //   return () => {
  //     status.dispatch({
  //       type: "SET_MESSAGE",
  //       message: "",
  //       messageType: "success",
  //     });
  //   };
  // }, []);

  const handleSubmit = (e) => {
    // let config = {
    //   headers: {
    //     auth: user.jwt,
    //   },
    // };
    e.preventDefault();
    // axios call will go here 


  };

  return (
    <div className="container">
      <div className="row">
        <form className="col s12" onSubmit={props.handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="text"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}

              />
              <label htmlFor="email">Email Address</label>
            </div>
            <div className="input-field col s4">
              <label>
                <input
                  id="password"
                  type="passwprd"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <span>Password</span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
            <button
            className="btn waves-effect waves-light"
            type="submit"
          >
            Login
          </button>

            </div>
          </div>
        </form>
  );
      </div>
    </div>
  );
};

export default Login;
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

// export default function SignIn() {
//   const classes = useStyles();

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         {/* <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar> */}
//         <Typography component="h1" variant="h5">
//           Log in
//         </Typography>
//         <form className={classes.form} noValidate>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//           />

//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Login 
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