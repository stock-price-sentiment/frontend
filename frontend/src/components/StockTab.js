import React from "react";
import { Paper, Typography, withStyles, Grid } from "@material-ui/core";
import "../styles/StockTab.scss";
import SentimentGauge from "./SentimentGauge";

const styles = theme => ({
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  heading: {
    fontWeight: "bold"
  },
  paper: {
    background: "inherit",
    border: "2px solid #F2C94C",
    display: "flex",
    justifyContent: "space-between",
    margin: 20,
    padding: '5px',
  },
  score: {
    fontWeight: "bold"
  },
  tickerPrice: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

const StockTab = props => {
  const { price, priceChange, score, ticker } = props.stock,
    { classes } = props;
  return (
    <Paper className={classes.paper} square={true}>

      <Grid container justify="space-between">
        <Grid style={{ width: 100 }} className={classes.column}>
          <Typography align="center" className={classes.tickerPrice}>{ticker.toUpperCase()}</Typography>
          <Typography align="center" className={classes.tickerPrice}>${price}</Typography>
        </Grid>

        <Grid item className={classes.column}>
          <Typography align="center" color="primary" className={classes.heading} variant="body1">SENTIMENT SCORE</Typography>
          <SentimentGauge score={score} />
        </Grid>

        <Grid item className={classes.column}>
          <Typography align="center" color="primary" className={classes.heading} variant="body1">OVERALL</Typography>
          <Typography align="center" className={classes.score} style={score > 0 ? { color: "#27AE60" } : { color: "red" }}>{score}</Typography>
        </Grid>

        <Grid item className={classes.column}>
          <Typography align="center" color="primary" className={classes.heading} variant="subtitle2">24HR +/-</Typography>
          <Typography align="center" className={classes.score} style={priceChange > 0 ? { color: "#27AE60" } : { color: "red" }}>{`${priceChange >= 0 ? '+' : ''}${priceChange}`}</Typography>
        </Grid>

      </Grid>

    </Paper>
  );
};

export default withStyles(styles)(StockTab);