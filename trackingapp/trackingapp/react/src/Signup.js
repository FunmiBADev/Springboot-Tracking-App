import React, { Component } from "react";
import AppNav from "./AppNav";
import 'react-datepicker/dist/react-datepicker.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Container } from "reactstrap";
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import Footer from "./Footer";

class Signup extends Component {

    emptySignup = {
        user_id :'',
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        admin: false,
        scrum_master: false,
      }

  constructor(props){
    super(props)
    this.state = {
      isLoading : true,
      signups : [],
      signup: this.emptySignup,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange= this.handleChange.bind(this);
  }

  async handleSubmit(event){
     
    const signup = this.state.signup;
  

    await fetch('/api/signup', {
      method : 'POST',
      headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(signup),
    });
    
    event.preventDefault();
    this.props.history.push("/dashboard");
  }
  handleChange(event){
    const target= event.target;
    const value= target.value;
    const name = target.name;
    let signup={...this.state.signup};
    signup[name] = value;
    this.setState({signup});
    console.log(signup);
}


  async componentDidMount(){
    const response = await fetch('/api/signup')
    const body = await response.json();
    this.setState({tasks : body , isLoading : false})
  }


  render() {
    const title = <h3> Sign Up</h3>
    const {login, isLoading} = this.state

    if (isLoading)
      return(<div>Loading...</div>)
      

    return (
      <div>
        <AppNav />
				<Footer/>
          <Container className="signup-form">
            {title}
         
          <form onSubmit={this.handleSubmit}>
          <Form.Group controlId="first_name">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" name="first_name" placeholder="First name" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group controlId="last_name">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" name="last_name" placeholder="Last name" onChange={this.handleChange} />
          </Form.Group>

					<Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="username" placeholder="Username" onChange={this.handleChange}/>
          </Form.Group>

					<Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Email" onChange={this.handleChange} />
          </Form.Group>

					<Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group>
            <Button variant="outline-dark" type="submit" 
               > Sign Up</Button>{' '}


            <Button variant="outline-dark" href="/" >Login</Button>{' '}
            
          </Form.Group>
      

          </form>
    
        </Container>
        
      </div>
    );
  }
}

export default Signup;