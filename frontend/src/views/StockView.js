import React from "react";
import '../styles/StockView.scss';
import Header from '../components/Header';
import StockList from '../components/StockList';

const dummyData = [
  { ticker: 'AAPL', price: 211.84, score: 0.54, priceChange: 0.02 },
  { ticker: 'RAD', price: 5.86, score: 0.63, priceChange: 0.36 },
  { ticker: 'MTCH', price: 82.88, score: 0.16, priceChange: -0.12 },
  { ticker: 'UBER', price: 211.84, score: -0.34, priceChange: -0.08 },
]

class StockView extends React.Component {
  state = {
    stocks: dummyData,
  }
  render() {
    const { stocks } = this.state;

    return (
      <div className='stock-view-ctn'>
        <Header />
        <div className="stock-list-ctn">
          <StockList stocks={stocks} />
        </div>
      </div>
    )
  }
}

export default StockView