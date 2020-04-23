import React, { Component } from "react";
import AppNav from "./AppNav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "reactstrap";
import "react-notifications-component/dist/theme.css";
import "animate.css";

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
      <div>
        <AppNav />
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30vh",
          }}
        >
          Welcome to SDLC Tracking Application
        </h2>
        <input
          type="text"
          placeholder="username"
          onChange={(event) => this.setState({ username: event.target.value })}
        ></input>
        <input
          type="text"
          placeholder="password"
          onChange={(event) => this.setState({ password: event.target.value })}
        ></input>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

{
  /* <Container>
          {title}
          <Container>
            <form onSubmit={this.handleSubmit}>
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>password</Form.Label>
                <Form.Control
                  type="text"
                  name="last_name"
                  placeholder="password"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Button variant="primary" type="submit">
                  {" "}
                  Login
                </Button>{" "}
                <Button variant="success" href="/signup">
                  Sign Up
                </Button>{" "}
              </Form.Group>
            </form>
          </Container>
        </Container> */
}

export default Home;
