import React, { Component } from "react";
import AppNav from "./AppNav";
import {  Carousel } from "reactstrap";

class Developer extends Component {
  state = {};

  render() {
    return (
      <div>
        <AppNav />
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          Welcome to my dashboard!
        </h2>
        
        <div class="row">
      <div class="col-sm">
           <div class="card" style="width: 18rem; height: 25rem;">
                <img src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/13524551_10154011149425376_4571398968479492287_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=JcoUztPAehgAX-tJtdU&_nc_ht=scontent-lht6-1.xx&oh=d09dce34bfa403701ed0b186f8aa5503&oe=5EB6AB26" class="card-img-top" alt="Card image cap"></img>
                <div class="card-body">
                  <h5 class="card-title">Avril</h5>
                  <p class="card-text">Became friends since: Feb 2020</p>
                </div>
                <div class="card-body">
                  <a href="#" class="card-link">Message</a>
                  <a href="#" class="card-link">Delete friend</a>
                </div>
              </div>
      </div>

      <div class="col-sm">
         <div class="card" style="width: 18rem; height: 25rem;">
              <img src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/17021463_1897702273795497_2870806247257622241_n.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=Bl1okkJ5dGkAX_wapGF&_nc_ht=scontent-lht6-1.xx&oh=67be05e924ac227b105bbfc0c95a92a5&oe=5EB51D28" class="card-img-top" alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Chloe</h5>
                <p class="card-text">Became friends since: Feb 2020</p>
              </div>
              <div class="card-body">
                <a href="#" class="card-link">Message</a>
                <a href="#" class="card-link">Delete friend</a>
              </div>
            </div>
      </div>

      <div class="col-sm">

        <div class="card" style="width: 18rem; height: 25rem;">
        <img src="https://scontent.fdsa1-1.fna.fbcdn.net/v/t1.0-9/22491797_2076842105880318_4797667878546559054_n.jpg?_nc_cat=103&_nc_sid=85a577&_nc_oc=AQljfAcdlPt4zP-H6QFrNTg4G6OJabcLfvv53wJVCn_qhNtBpamXlLF3dJK5s1vHvno&_nc_ht=scontent.fdsa1-1.fna&oh=88da90d04fc1c68751758e2cd3631204&oe=5EB36ED3" class="card-img-top" alt="Card image cap"></img>
        <div class="card-body">
            <h5 class="card-title">Ariane</h5>
            <p class="card-text">Became friends since: Feb 2020</p>
        </div>
        <div class="card-body">
            <a href="#" class="card-link">Message</a>
            <a href="#" class="card-link">Delete friend</a>
        </div>
        </div>
        </div>


        </div>
        </div>
    );
  }
}

export default Developer;
