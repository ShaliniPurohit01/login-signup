import React, { Component } from "react";
import { Link } from "react-router-dom";
import fire from "./config/Fire";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);

    this.state = {
      email: "",
      password: ""
    };
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.error(error);
      });
  }
  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        console.error(error);
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="col-md-6">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email Address</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              placeholder="Enter email Id"
            />
            <small id="emailhelp" class="form-text text-muted">
              {" "}
              Your Email is Secued!!
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              placeholder="Enter 8 character long Password"
            />
            <small id="emailhelp" class="form-text text-muted">
              {" "}
              Your Email is Secued!!
            </small>
          </div>
          <button type="submit" onClick={this.login} class="btn btn-primary">
            Login
          </button>
          <button
            onClick={this.Signup}
            class="btn btn-success"
            style={{ marginLeft: "25px" }}
          >
            Signup
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
