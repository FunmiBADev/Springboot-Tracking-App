  
// import React, { Component } from 'react';
// import {Nav,Navbar,NavItem,NavbarBrand, NavLink} from 'reactstrap';


// class AppNav extends Component {
//     state = {  }
//     render() {
//         return (
//           <div>
//             <Navbar color="dark" dark  expand="md">
//               <NavbarBrand href="/">SDLC Tracking Application</NavbarBrand>
//                 <Nav className="ml-auto" navbar>
//                   <NavItem>
//                     <NavLink href="/">Home</NavLink>
//                   </NavItem>
//                   {/* <NavItem>
//                     <NavLink href="/signup">Sign up</NavLink>
//                   </NavItem> */}
//                   <NavItem>
//                     <NavLink href="/create_task">Create Task</NavLink>
//                   </NavItem>
//                   <NavItem>
//                     <NavLink href="/dashboard">All Tasks</NavLink>
//                   </NavItem>
//                   {/* <NavItem>
//                     <NavLink href="/my_dashboard">My Dashboard</NavLink>
//                   </NavItem> */}
                
//                 </Nav>
          
//             </Navbar>
//           </div>
//         );
//       }
// }
 
// export default AppNav;

import React, { Component, useState } from 'react';
import {Nav,Navbar,NavItem,NavbarBrand, NavLink,Dropdown, DropdownItem, DropdownToggle, DropdownMenu,} from 'reactstrap';

const AppNav = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);


        return (
          <div>
            <Navbar color="dark" dark  expand="md">
              <NavbarBrand href="/">SDLC Tracking Application</NavbarBrand>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/create_task">Create Task</NavLink>
                  </NavItem>

                  <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle nav caret>
                              Tasks
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem href="/dashboard">All Tasks</DropdownItem>
                              <DropdownItem href="/find_category">Tasks by category</DropdownItem>
                              <DropdownItem href="/find_priority">Tasks by priority</DropdownItem>
                              <DropdownItem href="/find_status">Tasks by status</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>


                  <NavItem>
                    <NavLink href="/my_dashboard">My Dashboard</NavLink>
                  </NavItem>

                </Nav>

            </Navbar>
          </div>
        );
      }


export default AppNav;