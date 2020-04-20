import React, { Component } from 'react';
// import Table from 'react-bootstrap/Table';
import { Table,Container,Input,Button,Label, FormGroup, Form} from 'reactstrap';
import Moment from 'react-moment';

class Task extends Component {
    //state internal/private storage of components
    state = {
        isloading : true,
        Tasks : []
      } 

    // in charge of processing the js file and return as the export in the last line
    
    // sync : send request and wait for response 
    // async : send request and don't have to wait 

    async componentDidMount(){
        const response = await fetch('/api/dashboard')
        const body = await response.json();
        this.setState({Tasks : body, isloading : false});
    }

    render() {   
        const {Tasks, isloading} = this.state;
        if(isloading)
            return (<div> Loading...</div>);

           
						let rows =  
            Tasks.map( task =>
                <tr key={task.task_id}>
                  <td> {task.title}</td>
                  <td> {task.description}</td>
                  <td> {task.category}</td>
									<td> {task.priority}</td>
                  <td> {task.status}</td>
                  <td> {task.created_by}</td>
                 	<td> {task.assigned_to}</td>
									<td><Moment date={task.date_added} format="YYYY/MM/DD"/></td>
                  <td> {task.due_date}</td>
                  <td><Button size="sm" color="danger" onClick={() => this.remove(task.task_id)}>Delete</Button></td>
      
                </tr>
      
      
              )
       

        return ( 

					<div>

            {''}
            <Container>
              <h3>Expense List</h3>
              <Table className="mt-4">
              <thead>
                <tr>
									<th width="10%">Title</th>
                  <th width="30%">Description</th>
                  <th> Category</th>
									<th> Priority</th>
									<th> Status</th>
									<th> Created by</th>
                  <th> Assigned to</th>
                  <th> Date added</th>
                  <th width="10%">Due date</th>
									<th>Action</th>
                </tr>
              </thead>
              <tbody>
                 {rows}
              </tbody>

              </Table>
            </Container>
		</div>
			
         );
    }
}
 
export default Task ;