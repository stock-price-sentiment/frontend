import React from 'react';
import { Route } from "react-router-dom";
import StockView from './views/StockView'
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/" component={StockView} />
    </div>
  );
}

export default App;
