import React, { Component } from "react";
import './App.css';
import TOC from './components/TOC.js';
import Subject from "./components/Subject";
import Content from "./components/Content";
import reportWebVitals from './reportWebVitals';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="React" sub="for ui"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    )
  }
}




export default App;