import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Moment from "react-moment";

class PlayDate extends Component {
  state = {
    playdates: [],
  };

  componentDidMount() {
    axios
      .get("/api/playdate")
      .then((response) => {
        console.log(response.data);
        this.setState({
          playdates: response.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1>Play Date's</h1>
          {/* <li className="list-group-item">
                    <Link to={`/playdate/${playdate._id}`}>
                    {playdate.name} - <Moment format="MM-DD-YYYY">{playdate.date}</Moment> - {playdate.location} - {playdate.description}
                    </Link>
                    
                  </li> */}
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Event</th>
                <th scope="col">Date</th>
                <th scope="col">Location</th>
                <th scope="col">Description</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.playdates.map((playdate) => (
                <tr key={playdate._id}>
                  <td>{playdate.name}</td>
                  <td>
                    <Moment format="MM-DD-YYYY">{playdate.date}</Moment>
                  </td>
                  <td>{playdate.location}</td>
                  <td>{playdate.description}</td>
                  <td>
                    <Link to={`/playdate/${playdate._id}`}>
                      <button type="button" class="btn btn-light-blue">
                        Update
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button type="button" class="btn btn-light-blue">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>{this.state.playdates.length === 0 && <p>no play dates</p>}</div>
        </div>
      </div>
    );
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
