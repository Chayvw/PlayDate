import React from "react";
import axios from "axios";

import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function PlayDate(props) {
  const [state, setState] = React.useState({
    events: [
      {
        title: "Park Meetup",
        location: "Atlanta, GA",
        date: "August 12, 2020",
        description: "",
      },
    ],
  });

  React.useEffect(() => {
    axios
      .get("/api/playdate")
      .then((response) => {
        console.log(response.data);
        setState({
          events: response.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Card raised>
        <Box m={2} textAlign="center">
          <h1>This is Play Date's main page. </h1>
          <Box border={1}>
            {state.events.map((event, i) => (
              <Grid container key={i + "-events"}>
                <Grid item xs={12} sm={6}>
                  Title:
                </Grid>
                <Grid item xs={12} sm={6}>
                  {event.title}
                </Grid>
                <Grid item xs={12} sm={6}>
                  Location:
                </Grid>
                <Grid item xs={12} sm={6}>
                  {event.location}
                </Grid>
                <Grid item xs={12} sm={6}>
                  Date:
                </Grid>
                <Grid item xs={12} sm={6}>
                  {event.date}
                </Grid>
                <Grid item xs={12} sm={6}>
                <Typography align="right">
                  Description:
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  {event.description}
                  </Grid>
              </Grid>
            ))}
          </Box>
        </Box>
      </Card>
    </Container>
  );
}

export default PlayDate;
