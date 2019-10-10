import React from "react";
import NewsHeaderContent from './NewsHeaderContent';
import { AppBar, Toolbar, withStyles } from "@material-ui/core";

const styles = theme => ({
  toolbar: {
    display: "flex",
    justifyContent: "center"
  },
});

class NewsViewHeader extends React.Component {

  render() {
    const { classes } = this.props

    return (
      <AppBar position="relative">
        <Toolbar className={classes.toolbar}>
          <NewsHeaderContent/>
        </Toolbar>
      </AppBar>
    );
  }
};

export default withStyles(styles)(NewsViewHeader);