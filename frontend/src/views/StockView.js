import React from "react";
import '../styles/StockView.scss';
import StockViewHeader from '../components/StockViewHeader';
import StockList from '../components/StockList';
import { Container, useTheme, withStyles } from "@material-ui/core";

const dummyData = [
  { ticker: 'AAPL', price: 211.84, score: 0.54, priceChange: 0.02 },
  { ticker: 'RAD', price: 5.86, score: 0.63, priceChange: 0.36 },
  { ticker: 'MTCH', price: 82.88, score: 0.16, priceChange: -0.12 },
  { ticker: 'UBER', price: 211.84, score: -0.34, priceChange: -0.08 },
]

const styles = theme => ({
  container: {
    backgroundColor: theme.palette.secondary.main,
    marginTop: 20,
    padding: 0,
    minHeight: 500,
  }
})

class StockView extends React.Component {
  state = {
    stocks: dummyData,
  }
  render() {
    const { stocks } = this.state,
          { classes} = this.props;
          
    return (
      <Container maxWidth="md" className={classes.container}>
        <StockViewHeader />
        <Container style={{ padding: 0 }}>
          <StockList stocks={stocks} />
        </Container>
      </Container>
    )
  }
}

export default withStyles(styles)(StockView)