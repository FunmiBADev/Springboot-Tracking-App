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
      logins : [],
      login: this.emptyLogin,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(event) {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.login),
    });
    this.setState({ res: res });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let login = { ...this.state.signup };
    login[name] = value;
    this.setState({ login });
    console.log(login);
  }

  render() {
    const title = <h3> Login</h3>;

    // if (this.state.res === false) {
    //   return <div>Error</div>;
    // } else {
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
          <Container>
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
          </Container>
        </div>
      );
    }
  }


export default Home;
