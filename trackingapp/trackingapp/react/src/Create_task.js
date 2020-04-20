import React, { Component } from "react";
import AppNav from "./AppNav";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Link} from 'react-router-dom';

class Cretae_task extends Component {
  state = {

  };

  render() {
    return (
      <div>
        <AppNav />
        {/* <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
        SDLC Tracking Application - Cretae Task
        </h2> */}
 <container>
          <form>

          <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" class="select-form-color" onChange={this.handleChange}>
              <option value="User story">User story</option>
              <option value="Bug">Bug</option>
              <option value="Issue">Issue</option>
              </Form.Control>
          </Form.Group>
          
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" placeholder="Title" onChange={this.handleChange} />
          </Form.Group>

         
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3"class="form-control" name= "description" placeholder="Description"
               onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="category">
              <Form.Label>Priority</Form.Label>
              <Form.Control as="select" class="select-form-color" onChange={this.handleChange}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </Form.Control>
          </Form.Group>

          <Form.Group controlId="due_date">
            <Form.Label>Due Date</Form.Label>
            <Form.Control type="date" name="due_date" onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="assign">
            <Form.Label>Assigned To</Form.Label>
            <Form.Control type="text" name="assign" placeholder="Only assign tasks if authorised" 
             onChange={this.handleChange} />
          </Form.Group>

          <Form.Group>
            <Button variant="danger" tag={Link} to="/dashboard" >Cancel</Button>{' '}
            <Button variant="warning" type="reset" >Reset</Button>{' '}
            <Button variant="primary" type="submit" >Add Task</Button>
          </Form.Group>
          
  

          </form>
        </container>

      </div>
    );
  }
}

export default Cretae_task;
