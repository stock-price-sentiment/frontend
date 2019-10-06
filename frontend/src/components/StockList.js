import React from 'react';
import StockTab from '../components/StockTab';
import { Container } from '@material-ui/core';

const StockList = props => {
  const stockList = props.stocks.filter(stock => {
    return stock.ticker.includes(props.searchedTicker)
  })
  return (
    <Container
      maxWidth="sm"
      style={{
        padding: 0,
        height: '100%',
        paddingBottom: 200,
        overflowY: 'scroll'
      }}
    >
      {stockList.map(stock => (
        <StockTab key={stock.ticker} stock={stock} />
      ))}
    </Container>
  )
}

export default StockList;