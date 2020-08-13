import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav/index";
import TableHeaderData from "./components/TableHeaderData/index";
import MainHeader from "./components/MainHeader/index";
import SearchHeader from "./components/SearchHeader/index";

function App() {
  return (
    <div>
      <MainHeader/>
      <SearchHeader/>
      <TableHeaderData/>
    </div>
  );
}

export default App;
