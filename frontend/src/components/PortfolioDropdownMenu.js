import React from "react";
import { Paper, Typography, withStyles } from "@material-ui/core";

const styles = theme => ({
  paper: {
    position: "absolute",
    top: 57,
    left: 10,
    right: 10,
    minHeight: 100,
    backgroundColor: theme.palette.primary.main,
    padding: 5
  }
});

const PortfolioDropdownMenu = props => {
  const { classes } = props;

  return <Paper className={classes.paper}></Paper>;
};

export default withStyles(styles)(PortfolioDropdownMenu);
