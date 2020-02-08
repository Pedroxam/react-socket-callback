import React from "react";
import SocketData from "./client/socket";
import "./styles.css";

export default class App extends React.Component {
  myFunction() {
    SocketData({ option1: 1, option2: 2 }, function(result) {
      console.log(result); // get socket result in here
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}
