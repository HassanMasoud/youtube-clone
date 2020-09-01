import React, { Component } from "react";

import { Grid } from "@material-ui/core";

import youtube from "./api/youtube";

class App extends Component {
  render() {
    return (
      <Grid container spacing={16} justify="center">
        <Grid item xs={12}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              {/* Search Bar */}
            </Grid>
            <Grid item xs={8}>
              {/* Video */}
            </Grid>
            <Grid item xs={4}>
              {/* Video list */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
