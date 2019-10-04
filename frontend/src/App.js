import React from 'react';
import { Route } from "react-router-dom";
import StockView from './views/StockView'
import MainHeader from './components/MainHeader';
import './styles/App.scss';

const App = () => {
  return (
    <div className="app-ctn">
      <MainHeader />
      <Route path="/" component={StockView} />
    </div>
  );
}

export default App;
