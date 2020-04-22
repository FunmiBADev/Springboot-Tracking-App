import React, { Component } from "react";
import AppNav from "./AppNav";
import 'react-datepicker/dist/react-datepicker.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Container } from "reactstrap";
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import "./Login.css";

class Login extends Component {

  emptyLogin = {
    user_id :'6',
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    admin: "",
    scrum_master: "",
  }

  constructor(props){
    super(props)
    this.state = {
      isLoading : true,
      users : [],
      login: this.emptyLogin,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange= this.handleChange.bind(this);
    // this.handleDateChange= this.handleDateChange.bind(this);
  }

  async handleSubmit(event){

    const login = this.state.login;


    await fetch('/api/login', {
      method : 'GET',
      headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(login),
    });

    event.preventDefault();
    this.props.history.push("/welcome");
  }
//   handleChange(event){
//     const target= event.target;
//     const value= target.value;
//     const name = target.name;
//     let login={...this.state.login};
//     login[name] = value;
//     this.setState({login});
//     console.log(login);
// }
//
// handleDateChange(date){
//   let task={...this.state.task};
//   task.due_date= date;
//   this.setState({task});
//
// }


  async componentDidMount(){
    const response = await fetch('/login')
    const body = await response.json();
    this.setState({login : body , isLoading : false})
  }


  render() {
    const title = <h3>Log in</h3>
    const {login, isLoading} = this.state

    if (isLoading)
      return(<div>Loading...</div>)


    return (
      <div>
        <AppNav />
<div class="container" id="container">
<div class="form-container sign-up-container">
  <form action="#">
    <h1>Create Account</h1>
    <div class="social-container">
      <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
      <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
      <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
    </div>
    <span>or use your email for registration</span>
    <input type="text" placeholder="Name" />
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>Sign Up</button>
  </form>
</div>
<div class="form-container sign-in-container">
  <form action="#">
    <h1>Sign in</h1>
    <div class="social-container">
      <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
      <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
      <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
    </div>

    <div class="form-group ${error != null ? 'has-error' : ''}">

    <span>or use your account</span>
    <input type="text" placeholder="Username" />
    <input type="password" placeholder="Password" />
    <a href="#">Forgot your password?</a>
    <span>${error}</span>
    <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
    <button>Sign In</button>
    </div>
  </form>

</div>
<div class="overlay-container">
  <div class="overlay">
    <div class="overlay-panel overlay-left">
      <h1>Welcome Back!</h1>
      <p>To keep connected with us please login with your personal info</p>
      <button class="ghost" id="signIn">Sign In</button>
    </div>
    <div class="overlay-panel overlay-right">
      <h1>Hello, Friend!</h1>
      <p>Enter your personal details and start journey with us</p>
      <button class="ghost" id="signUp">Sign Up</button>
    </div>
  </div>
</div>
</div>



<footer>
<p>
  Created with <i class="fa fa-heart"></i> by
  <a target="_blank" href="https://florin-pop.com">Florin Pop</a>
  - Read how I created this and how you can join the challenge
  <a target="_blank" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>.
</p>
</footer>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="${contextPath}/resources/js/bootstrap.min.js"></script>
      </div>
    );
  }
}

export default Login;
