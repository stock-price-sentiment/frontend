import React from 'react';
import StockTab from '../components/StockTab';
import { Container } from '@material-ui/core';

const StockList = props => {
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
      {props.stocks.map(stock => (
        <StockTab key={stock.ticker} stock={stock} />
      ))}
    </Container>
  )
}

export default StockList;