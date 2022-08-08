import React, { Component } from "react";
import './App.css';
import TOC from './components/TOC.js';
import Subject from "./components/Subject";
import Content from "./components/Content";
import reportWebVitals from './reportWebVitals';






class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subject: { title: 'WEB', sub: 'World Wide Web!' },
      content : [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        // { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' },
      ]
  }
}

render() {
  return (
    <div className="App">
      <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
      <Subject title="React" sub="for ui"></Subject>
      <TOC data={this.state.content}></TOC>
      <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
    </div>
  )
} 
}
// dkd



export default App;