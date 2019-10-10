import React from 'react';
import { Container } from '@material-ui/core';
import NewsCard from './NewsCard'
import StockList from './StockList';

const NewsList = props => {
  return (
    <Container
      maxWidth="sm"
      style={{
        padding: 0,
        height: '100%',
        paddingBottom: 100,
      }}
    >
    {props.news.map(newsArticle => (
        <NewsCard key={newsArticle.ticker} newsArticle={newsArticle}/>
    ))}
    </Container>
  )
}

export default NewsList;