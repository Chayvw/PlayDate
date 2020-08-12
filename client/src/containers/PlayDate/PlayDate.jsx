import React, { Component } from "react";
import axios from "axios"; 
// import { response } from "express";

class PlayDate extends Component {
    // state = {
    //     playdates: [],
    //   };
    
      componentDidMount() {
          axios.get("/api/playdate")
          .then((response) => {
              console.log(response.data)
          })
          .catch((err) => {
              console.log(err);
          });
        // this.getPlayDate();
      }
    
    //   getPlayDate = () => {
    //     axios
    //       .get("/api/playdate")
    //       .then((response) => {
    //         this.setState({
    //           playdates: response.data.data,
    //         });
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   };
  render() {
    return (
      <div>
        <h1>This is Play Date's date page. </h1>
      </div>
    );
  }
// import React from "react";
// import axios from "axios";
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//     padding: '50px',
//   },

// });

// function PlayDate(props) {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     events: [
//       {
//         title: "Park Meetup",
//         location: "Atlanta, GA",
//         date: "August 12, 2020",
//         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere reiciendis quisquam fugiat, tempore ab, consectetur, laborum ipsum hic atque corporis itaque sapiente minima. Qui molestias itaque maxime. Ut, necessitatibus quos!",
//       },
//     ],
//   });

//   React.useEffect(() => {
//     axios
//       .get("/api/playdate")
//       .then((response) => {
//         console.log(response.data);
//         setState({
//           events: response.data.data,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
 
//         <Card className={classes.root} width={1/4}>
//       <CardActionArea>
//       {state.events.map((event, i) => (
//               <Grid container key={i + "-events"}>
//                 <Grid item xs={12} sm={6}>
//         <CardContent>
//           <Typography gutterBottom variant="h4" component="h1">
//             {event.title}
//           </Typography>
//           <Typography gutterBottom variant="h6" component="h2">
//             {event.location}
//           </Typography>
//           <Typography gutterBottom variant="body1" component="h2">
//             {event.date}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             {event.description}
//           </Typography>
//         </CardContent>
//         </Grid>
//         </Grid>
//       ))}
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Email
//         </Button>
//       </CardActions>
//     </Card>



  
//   );

              
  
  
}

export default PlayDate;
