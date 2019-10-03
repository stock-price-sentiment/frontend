import React from "react";
import "../styles/StockTab.scss";
import { Paper, Typography, withStyles } from "@material-ui/core";

const styles = theme => ({
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  heading: {
    color: "white",
    fontWeight: "bold"
  },
  paper: {
    background: "inherit",
    border: "1px solid #F2C94C",
    display: "flex",
    justifyContent: "space-between",
    margin: 20,
    padding: 10,
    maxWidth: 600,
    width: "90%",
    minWidth: 400
  },
  score: {
    fontWeight: "bold"
  },
  tickerPrice: {
    color: 'white',
    fontWeight: 'bold',
  }
});

const StockTab = props => {
  const { price, priceChange, score, ticker } = props.stock,
    { classes } = props;
  return (
    <Paper className={classes.paper} square={true}>

      <div className={classes.column}>
        <Typography className={classes.tickerPrice}>{ticker.toUpperCase()}</Typography>
        <Typography className={classes.tickerPrice}>${price}</Typography>
      </div>

      <div className={classes.column}>
        <Typography className={classes.heading} variant="body1">
          OVERALL
        </Typography>
        <Typography
          className={classes.score}
          style={priceChange > 0 ? { color: "red" } : { color: "#27AE60" }}
        >
          {score}
        </Typography>
      </div>

      <div className={classes.column}>
        <Typography className={classes.heading} variant="subtitle2">
          24HR +/-
        </Typography>
        <Typography
          className={classes.score}
          style={priceChange > 0 ? { color: "red" } : { color: "#27AE60" }}
        >
          {`${priceChange >= 0 ? '+' : '-'}${priceChange}`}
        </Typography>
      </div>
    </Paper>
  );
};

export default withStyles(styles)(StockTab);
