import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { Container, Button } from "reactstrap";
import Moment from "react-moment";
import AppNav from "./AppNav";
import "./App.css";
import Footer from "./Footer";


class Task extends Component {
  //state internal/private storage of components
  state = {
    isloading: true,
    Tasks: [],
  };

  async remove(task_id){
    await fetch(`/api/task/${task_id}` , {
      method: 'DELETE' ,
      headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      }

    }).then(() => {
      let updatedTasks = [...this.state.Tasks].filter(i => i.task_id !== task_id);
      this.setState({Tasks : updatedTasks});
    });

}

editTask(task_id) {
  window.localStorage.setItem("TaskId", task_id);
  this.props.history.push('/edittaskform');
}
  // in charge of processing the js file and return as the export in the last line

  // sync : send request and wait for response
  // async : send request and don't have to wait

  
  async componentDidMount() {
    const response = await fetch("/api/dashboard");
    const body = await response.json();
    this.setState({ Tasks: body, isloading: false });
    
  }

  render() {
    const { Tasks, isloading } = this.state;

    if (isloading) return <div> Loading...</div>;

    let rows = Tasks.map((task) => (
      <tr key={task.task_id}>
        <td> {task.title}</td>
        <td> {task.description}</td>
        <td> {task.category}</td>
        <td> {task.priority}</td>
        <td> {task.status}</td>
        <td> {task.assigned_to}</td>
        <td>
          <Moment date={task.date_added} format="YYYY/MM/DD" />
        </td>
        <td> {task.due_date}</td>
        <td>
          <Button className="edit-button"
            size="sm"
            color="outline-danger"
            onClick={() => this.remove(task.task_id)}
          >
            Delete
          </Button>
          {""}
          <Button className="edit-button"
            size="sm"
            color="outline-warning"
            onClick={() => this.editTask(task.task_id)}
          >
            Edit
          </Button>
        </td>
      </tr>
    ));

    return (
      <div className="font">
        <AppNav />
        <Footer/>
        {""}
        <Container>
          <h3>All tasks dashboard</h3>
          <Table responsive>
            <thead>
              <tr>
                <th width="10%">Title</th>
                <th width="30%">Description</th>
                <th width="10%"> Category</th>
                <th width="5%"> Priority</th>
                <th width="10%"> Status</th>
                <th width="15%"> Assigned to</th>
                <th width="10%"> Date added</th>
                <th width="15%">Due date</th>
                <th width="10%"> Action</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default Task;
 
