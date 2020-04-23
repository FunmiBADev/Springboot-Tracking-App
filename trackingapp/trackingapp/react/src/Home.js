import React, { Component } from "react";
import AppNav from "./AppNav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Input } from "reactstrap";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import Footer from "./Footer";

class Home extends Component {
  emptyLogin = {
    username: "",
    password: "",
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      logins: [],
      login: this.emptyLogin,
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(event) {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    });
    this.setState({ res: res });
    if (res.status == 200) {
      window.location.href = "http://localhost:3000/dashboard";
    } else {
      window.alert("Wrong username or password");
    }
  }

  // handleChange(event) {
  //   const target = event.target;
  //   const value = target.value;
  //   const name = target.name;
  //   let login = { ...this.state.signup };
  //   login[name] = value;
  //   this.setState({ login });
  //   console.log(login);
  // }

  render() {
    const title = <h3> Login</h3>;

    return (
      <div className="font">
        <AppNav />
        <Footer />
       
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30vh",
          }}
        >
          Welcome to SDLC Tracking Application
        </h1>
        <div class="container">
          <div class="row">
            <div class="col">
              <i class="fas fa-network-wired login-page-font"></i>
              <h3>Track progress</h3>
            </div>
            <div class="col">
              <i class="fas fa-code-branch login-page-font"></i>
              <h3>Share tasks</h3>
            </div>
            <div class="col">
              <i class="fas fa-tasks login-page-font"></i>
              <h3>Review task</h3>
            </div>
          </div>
        </div>

        <div className="wrapper-login">
          <div className="wrapper-login-input-group">
            <Input
              type="text"
              placeholder="username"
              className="input-box"
              onChange={(event) =>
                this.setState({ username: event.target.value })
              }
            ></Input>
            <Input
              type="password"
              placeholder="password"
              className="input-box"
              onChange={(event) =>
                this.setState({ password: event.target.value })
              }
            ></Input>
            <Button variant="outline-dark" onClick={this.handleSubmit}>
              Sign In
            </Button>
            <Button variant="outline-dark" href="/signup">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
