import React from "react";
import '../styles/StockView.scss';
import StockViewHeader from '../components/StockViewHeader';
import NewsViewHeader from '../components/NewsViewHeader';
import NewsList from '../components/NewsList';
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


const newsData = [
  { ticker: 'AAPL', source: 'BLOOMBERG', posted: '10m', description: 'Sanctions send positive signal for Apple as Huawei market share slips after THIS TEXT SHOULD BE CONDENSED'},
  { ticker: 'UBER', source: 'YAHOO', posted: '4h', description: 'Uber shares slide after earnings report misses projected target. After decreased THIS TEXT SHOULD BE CONDENSED'},
  { ticker: 'RAD', source: 'RAD', posted: '6h', description: 'Rite Aid shares find relief after announcement of new CEO. Investors await THIS TEXT SHOULD BE CONDENSED'}
]


const styles = theme => ({
  container: {
    backgroundColor: theme.palette.secondary.main,
    padding: 0,
    height: '100%',
    overflow: 'hidden'
  }
})

class StockView extends React.Component {
  state = {
    stocks: dummyData,
    news: newsData,
    searchedTicker: '',
  }

  addStockToList = ticker => {
    this.setState(prevState => ({
      stocks: [...prevState.stocks, { ticker: ticker, price: 1.00, score: 0.5, priceChange: 1.00 }],
    }))
  }

  handleTickerSearch = e => {
    this.setState({ searchedTicker: e.target.value.toUpperCase() })
  }

  render() {
    const { stocks, news, searchedTicker } = this.state,
          { classes} = this.props;
          
    return (
      <div>
      {/* <Container maxWidth="md" className={classes.container}>
        <StockViewHeader handleTickerSearch={this.handleTickerSearch} showAddStockForm={this.showAddStockForm} ticker={searchedTicker} addStockToList={this.addStockToList} />
        <StockList stocks={stocks} searchedTicker={searchedTicker} />
      </Container> */}
      <Container maxWidth="md" className={classes.container}>
        <NewsViewHeader />
        <NewsList news={news}/>
      </Container>
      </div>
    )
  }
}

export default withStyles(styles)(StockView)