import React, { Component, useState } from "react";
import Table from "react-bootstrap/Table";
import { Container, Button, DropdownItem, DropdownMenu, DropdownToggle,Dropdown } from "reactstrap";
import Moment from "react-moment";
import AppNav from "./AppNav";
import Footer from "./Footer";
import "./App.css";


const Find_priority = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div>
    <AppNav />
    <Footer />
    <Container>
    <h2>
    Select from priority
    </h2>
    {''}
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Priority
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>High</DropdownItem>
        <DropdownItem>Medium</DropdownItem>
        <DropdownItem>Low</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </Container>
    </div>




    );
  }


export default Find_priority;
