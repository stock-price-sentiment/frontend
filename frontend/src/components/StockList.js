import React from 'react';
import StockTab from '../components/StockTab';

const StockList = props => {
  return (
    <div>
      {props.stocks.map(stock => (
        <StockTab key={stock.ticker} stock={stock} />
      ))}
    </div>
  )
}

export default StockList;