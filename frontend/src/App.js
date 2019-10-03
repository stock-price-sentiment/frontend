import React from 'react';
import { Route } from "react-router-dom";
import StockView from './views/StockView'
import './styles/App.scss';

const App = () => {
  return (
    <div className="app-ctn">
      <Route path="/" component={StockView} />
    </div>
  );
}

export default App;
