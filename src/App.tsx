import "./App.css";

// import { Camera } from "react-feather";
// import { RepoIcon } from "@primer/octicons-v2-react";
// import { Button } from "@primer/components";
// import Button from "@material-ui/core/Button";
import React from "react";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <Camera /> */}
        {/* <RepoIcon /> */}
        {/* <Button /> */}
      </header>
    </div>
  );
}

export default App;
