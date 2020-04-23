import React, { Component } from "react";
import AppNav from "./AppNav";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Input, Label, FormGroup } from "reactstrap";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import Footer from "./Footer";

class EditTaskForm extends Component {
  // editedTask = {
  //   task_id: "",
  //   title: "",
  //   description: "",
  //   priority: "",
  //   category: "",
  //   date_added: new Date(),
  //   status: "",
  //   due_date: new Date(),
  //   created_by: "",
  //   assigned_to: "",
  //   "user": null,

  // }

  constructor(props) {
    super(props);
    this.state = {
      // isLoading : true,
      // date : new Date(),
      // task: this.editedTask,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.loadTask = this.loadTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  async handleSubmit(event) {
    // console.log(this.state.task);
    event.preventDefault();
    const task = this.state;
    // console.log(">>>", task);
    await fetch("/api/task/" + task, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    this.props.history.push("/dashboard");
  }

  // componentDidMount() {
  //   this.loadTask();
  // }

  handleDateChange(date) {
    console.log(">>>>", date);
    let task = { ...this.state.task };
    task.due_date = date;
    this.setState({ task });
  }

  // async loadTask() {
  //   const response = await fetch(
  //     "/api/task/" + window.localStorage.getItem("TaskId")
  //   );
  //   const task = await response.json();
  // this.setState({
  //     task_id: task.task_id,
  //     title: task.title,
  //     description: task.description,
  //     priority: task.priority,
  //     category: task.category,
  //     date_added: new Date(),
  //     status: task.status,
  //     due_date: new Date(),
  //     created_by: task.created_by,
  //     assigned_to: task.assigned_to,
  //     "user": null,
  //     editedTask: task
  // });
  // }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
    // console.log(name, value);
    // console.log(this.state);
  }

  // onChange = (t) => this.setState({ [t.target.name]: t.target.value });

  render() {
    const title = <h3>Edit Task</h3>;
    return (
      <div>
        <AppNav />
        <Footer />
        <Container>
          {title}
          <container>
            <form onSubmit={this.handleSubmit}>
              <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as="select"
                  class="select-form-color"
                  name="category"
                  onChange={this.handleChange}
                >
                  <option value="User story">User story</option>
                  <option value="Bug">Bug</option>
                  <option value="Issue">Issue</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Title"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  class="form-control"
                  name="description"
                  placeholder="Description"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="category">
                <Form.Label>Priority</Form.Label>
                <Form.Control
                  as="select"
                  class="select-form-color"
                  name="priority"
                  onChange={this.handleChange}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="due_date">
                <Form.Label>Due Date</Form.Label>
                <Form.Control
                  type="date"
                  name="due_date"
                  onChange={this.handleDateChange}
                />
              </Form.Group>

              <Form.Group controlId="assign">
                <Form.Label>Assigned To</Form.Label>
                <Form.Control
                  type="text"
                  name="assign"
                  placeholder="Only assign tasks if authorised"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={() => {
                    store.addNotification({
                      title: "Event",
                      message: "Update Sucessful",
                      type: "default",
                      container: "bottom-left",
                      animationIn: ["animated", "fadeIn"],
                      animationOut: ["animated", "fadeOut"],
                      dismiss: {
                        duration: 3000,
                      },
                    });
                  }}
                >
                  Save Change
                </Button>{" "}
                <Button variant="danger" href="/dashboard">
                  Cancel
                </Button>{" "}
              </Form.Group>
            </form>
          </container>
        </Container>
      </div>
    );
  }
}

export default EditTaskForm;
