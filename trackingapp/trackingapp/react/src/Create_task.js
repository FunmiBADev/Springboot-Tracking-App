import React, { Component } from "react";
import AppNav from "./AppNav";
import 'react-datepicker/dist/react-datepicker.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Container } from "reactstrap";

class Cretae_task extends Component {

//   {
//     "task_id": 6,
//     "title": "Test Create task",
//     "description": "This method should send new tasks to db",
//     "priority": "High",
//     "category": "Userstory",
//     "date_added": "2020-04-19T17:00:00Z",
//     "status": "Not Started",
//     "due_date": "2020-04-20T17:00:00.000Z",
//     "created_by": "tester",
//     "assigned_to": "tester",
//     "user": null
// }
  emptyTask = {
    task_id :'6',
    title: "",
    description: "",
    priority: "",
    category: "",
    date_added: new Date(),
    status: "",
    due_date: "",
    created_by: "",
    assigned_to: "",
    "user": null
  }

  constructor(props){
    super(props)
    this.state = {
      isLoading : true,
      tasks : [],
      date : new Date(),
      task: this.emptyTask,
    }
  }


  async componentDidMount(){
    const response = await fetch('/api/task')
    const body = await response.json();
    this.setState({tasks : body , isLoading : false})
  }

  render() {
    const title = <h3> Create new tasks</h3>
    const {tasks, isLoading} = this.state

    if (isLoading)
      return(<div>Loading</div>)

    return (
      <div>
        <AppNav />
          <Container>
            {title}
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
            <Button variant="primary" type="submit" >Add Task</Button>{' '}
            <Button variant="danger" href="/dashboard" >Cancel</Button>{' '}
            <Button variant="warning" type="reset" >Reset</Button>
            
          </Form.Group>
          
  

          </form>
        </container>
        </Container>
      </div>
    );
  }
}

export default Cretae_task;
