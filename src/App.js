import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Header from'./component/Layout/Header';
import RouteVal from './component/Layout/RouteVal';

 const App=()=> {
    return (
      <div>
        <Header/>
        <RouteVal/>
      </div>
    );
}
export default App;
