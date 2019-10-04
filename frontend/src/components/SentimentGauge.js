import React from "react";
import "../styles/StockTab.scss";
import { Paper, Typography, withStyles, Grid } from "@material-ui/core";

const styles = theme => ({
  bar: {
    width: '50%',
    height: '100%',
  },
  barCtn: {
    width: '85%',
    height: 15,
    display: 'flex',
    justifyContent: 'center',
  },
  scale: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    fontSize: 12
  },
  scaleNum: {
    width: '20%',
    textAlign: 'center',
  }
});

const SentimentGauge = props => {
  const { classes, score } = props;

  return (
    <Grid container direction='column' alignItems='center'>

      <Grid item className={classes.barCtn}>
        <Grid container justify="flex-end" className={classes.bar}>
          <Grid item style={{width: `${score <= 0 ? score * 100 * -1 : 0}%`, height: '100%', backgroundColor: 'red'}}></Grid>
        </Grid>
        
        <Grid container justify="flex-start" className={classes.bar}>
          <Grid item style={{width: `${score > 0 ? score * 100 : 0}%`, height: '100%', backgroundColor: '#27AE60'}}></Grid>
        </Grid>
      </Grid>

      <Grid item className={classes.scale}>
        <div className={classes.scaleNum} color="red" style={{color: 'red'}}>-1.0</div>
        <div className={classes.scaleNum} style={{color: 'red'}}>-0.5</div>
        <div className={classes.scaleNum}>0</div>
        <div className={classes.scaleNum} style={{color: '#27AE60'}}>+0.5</div>
        <div className={classes.scaleNum} style={{color: '#27AE60'}}>+1.0</div>
      </Grid>

    </Grid>
  );
};

export default withStyles(styles)(SentimentGauge);