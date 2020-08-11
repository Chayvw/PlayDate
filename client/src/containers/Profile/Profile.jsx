import React from "react";
import axios from "axios";

import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function Profile(props) {
  const [state, setState] = React.useState({
    profiles: [
      {
        name: "Spot",
        gender: "male",
        age: 3,
        size: 25,
        city: "Houston",
        state: "Texas",
      },
      {
        name: "Shiloh",
        gender: "male",
        age: 6,
        size: 18,
        city: "Little Rock",
        state: "Arkansas",
      },
    ],
  });

  React.useEffect(() => {
    // axios
    //   .get("/api/profiles")
    //   .then((response) => {
    //     console.log(response.data);
    //     setState({
    //       profiles: response.data.data,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  return (
    <Container>
      <Card raised>
        <Box m={2} textAlign="center">
          <h1>This is Play Date's profile page. </h1>
          <Box border={1}>
            {state.profiles.map((profile, i) => (
              <Grid container key={i + "-profile"}>
                <Grid item xs={12} sm={6}>
                  Name:
                </Grid>
                <Grid item xs={12} sm={6}>
                  {profile.name}
                </Grid>
                <Grid item xs={12} sm={6}>
                  Age:
                </Grid>
                <Grid item xs={12} sm={6}>
                  {profile.age}
                </Grid>
                <Grid item xs={12} sm={6}>
                  Gender:
                </Grid>
                <Grid item xs={12} sm={6}>
                  {profile.gender}
                </Grid>
                <Grid item xs={12} sm={6}>
                  Size:
                </Grid>
                <Grid item xs={12} sm={6}>
                  {profile.size} lbs
                </Grid>
                <Grid item xs={12} sm={6}>
                  City:
                </Grid>
                <Grid item xs={12} sm={6}>
                  {profile.city}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography align="right">State:</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography
                    align="left"
                    color={profile.state === "Texas" ? "inherit" : "secondary"}
                  >
                    {profile.state}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Box>
        </Box>
      </Card>
    </Container>
  );
}

export default Profile;
