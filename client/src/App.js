import React, { Component } from 'react';
import './App.css';
import FileUpload from "./components/FileUpload";
import DropZone from "./components/DropZone";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>CSV file uploading and parsing site.</h2>
        <FileUpload />
        <DropZone/>
      </div>
    );
  }
}

export default App;
