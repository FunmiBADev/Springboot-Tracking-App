


import React, { Component, useState } from "react";
import Table from "react-bootstrap/Table";
import { Container, Button, DropdownItem, DropdownMenu, DropdownToggle,Dropdown } from "reactstrap";
import Moment from "react-moment";
import AppNav from "./AppNav";
import Footer from "./Footer";
import "./App.css";


const Find_category = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div>
    <AppNav />
    <Footer />
    <Container>
    <h2>
    Select from category
    </h2>
    {''}
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Category
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>User story</DropdownItem>
        <DropdownItem>Bug</DropdownItem>
        <DropdownItem>Issue</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </Container>
    </div>
    );
  }


export default Find_category;