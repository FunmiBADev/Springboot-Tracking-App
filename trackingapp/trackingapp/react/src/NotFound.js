import React, { Component } from 'react';
import AppNav from './AppNav';
import Footer from "./Footer";



class NotFound extends Component {
    state = {}

    render() { 
        return (
            <div>
             <AppNav/>
             <Footer/>
             <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
               Page not found 404 
               </h2>
              </div>
            );
    }
}
 
export default NotFound;