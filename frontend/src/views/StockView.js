import React from "react";
import '../styles/StockView.scss';
import StockViewHeader from '../components/StockViewHeader';
import StockList from '../components/StockList';
import AddStock from '../components/AddStock';
import { Container, withStyles } from "@material-ui/core";

const dummyData = [
  { ticker: 'AAPL', price: 211.84, score: 0.54, priceChange: 0.02 },
  { ticker: 'RAD', price: 5.86, score: 0.63, priceChange: 0.36 },
  { ticker: 'MTCH', price: 82.88, score: 0.16, priceChange: -0.12 },
  { ticker: 'UBER', price: 211.84, score: -0.34, priceChange: -0.08 },
  { ticker: 'FB', price: 80.84, score: -0.99, priceChange: 7.88 },
  { ticker: 'TWTR', price: 45.93, score: 99, priceChange: 3.03 },
  { ticker: 'MSFT', price: 55.23, score: 0.5, priceChange: -1.4 },
  { ticker: 'TSLA', price: 203.23, score: -0.4, priceChange: -20.33 },
  { ticker: 'SNAP', price: 16.22, score: 0.65, priceChange: 0.43 },
]

const styles = theme => ({
  container: {
    backgroundColor: theme.palette.secondary.main,
    marginTop: 20,
    padding: 0,
    height: '100%', //
  }
})

class StockView extends React.Component {
  state = {
    stocks: dummyData,
    showForm: false,
  }

  showAddStockForm = e => {
    this.setState({ showForm: true });
  }

  render() {
    const { showForm, stocks } = this.state,
          { classes} = this.props;
          
    return (
      <Container maxWidth="md" className={classes.container}>
        <StockViewHeader showAddStockForm={this.showAddStockForm} />
        {showForm ? <AddStock /> : undefined}
        <StockList stocks={stocks} />
      </Container>
    )
  }
}

export default withStyles(styles)(StockView)