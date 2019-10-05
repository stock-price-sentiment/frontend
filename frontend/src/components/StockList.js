import React from 'react';
import StockTab from '../components/StockTab';
import { Container } from '@material-ui/core';

const StockList = props => {
  return (
    <Container maxWidth="sm" style={{padding: 0}}>
      {props.stocks.map(stock => (
        <StockTab key={stock.ticker} stock={stock} />
      ))}
    </Container>
  )
}

export default StockList;