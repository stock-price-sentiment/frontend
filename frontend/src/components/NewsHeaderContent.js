import React from 'react';
import { Typography, withStyles } from "@material-ui/core";

const styles = theme => ({
    headerText: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    title: {
      fontWeight: "bold"
    },
  })

const NewsHeaderContent = props => {
  const { classes } = props;

  return (
      <div className={classes.headerText}>
        <Typography color="secondary" className={classes.title} variant="h5">NEWS</Typography>
      </div>
  
  )
}

export default withStyles(styles)(NewsHeaderContent);