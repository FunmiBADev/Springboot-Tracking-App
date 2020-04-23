import React, { Component } from 'react';
import Table from "react-bootstrap/Table";
import { Container, Button } from "reactstrap";
import Moment from "react-moment";
import AppNav from './AppNav';
import Footer from "./Footer";

const My_dashboard = (props) => {
  return (
    <div>
      <AppNav />
      <Footer />
    <Container>
      <h3>Complete tasks</h3>
      {""}
    <Table responsive>
      <thead>
        <tr>
          <th width="10%">Title</th>
          <th width="30%">Description</th>
          <th width="10%"> Category</th>
          <th width="10%"> Priority</th>
          <th width="10%"> Status</th>
          <th width="10%"> Assigned to</th>
          <th width="10%"> Date added</th>
          <th width="10%">Due date</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th scope="row">Add Tasks</th>
          <td>Implemtation of the first feature</td>
          <td>User Story</td>
          <td>High</td>
          <td>Complete</td>
          <td>Team2</td>
          <td>2020-10-03</td>
          <td>2020-10-04</td>
        </tr>
        <tr>
          <th scope="row">Verification</th>
          <td>Verification not working on login page</td>
          <td>Issue</td>
          <td>High</td>
          <td>Complete</td>
          <td>Team2</td>
          <td>2020-10-03</td>
          <td>2020-10-04</td>
        </tr>
        <tr>
          <th scope="row">Date</th>
          <td>Due date is not showing on dashboard</td>
          <td>Bug</td>
          <td>High</td>
          <td>Complete</td>
          <td>Team2</td>
          <td>2020-10-03</td>
          <td>2020-10-04</td>
        </tr>
        </tbody>
      </Table>
      </Container>
      </div>
  );
}
export default My_dashboard;


//
// class My_dashboard extends Component {
//     state = {}
//
//     render() {
//         return (
//           <div>
//             <AppNav />
//             <Footer />
//             {""}
//             <Container>
//               <h3>All tasks dashboard</h3>
//               <Table striped bordered hover size="sm">
//                 <thead>
//                   <tr>
//                     <th width="10%">Title</th>
//                     <th width="30%">Description</th>
//                     <th width="10%"> Category</th>
//                     <th width="10%"> Priority</th>
//                     <th width="10%"> Status</th>
//                     <th width="10%"> Created by</th>
//                     <th width="10%"> Assigned to</th>
//                     <th width="10%"> Date added</th>
//                     <th width="10%">Due date</th>
//                     <th width="10%"> Action</th>
//                   </tr>
//                 </thead>
//               </Table>
//             </Container>
//           </div>
//             // <div>
//             //  <AppNav />
//             //  <Footer />
//             //  <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
//             //    Welcome to my dashboard!
//             //    </h2>
//             //   </div>
//             );
//     }
// }
//
// export default My_dashboard;