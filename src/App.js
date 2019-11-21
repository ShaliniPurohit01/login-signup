import React, { Component } from "react";
import "./App.css";
import fire from "./config/Fire";
import Login from "./Login";
import Home from "./Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }
  componentDidMount() {
    this.authListner();
  }
  authListner() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return (
      <div className="App">
        <h1>hello</h1>
        <div>{this.state.user ? <Home /> : <Login />}</div>;
      </div>
    );
  }
}

export default App;
