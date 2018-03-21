import React, { Component } from "react";
import {Route, NavLink, HashRouter } from "react-router-dom";
import Home from './Home';
import Stuff from './Stuff';
import Contact from './Contact';
import ComponentLifeCycle from './ComponentLifeCycle';
import FormsMethod from './FormsMethod';
import KeyValuePair from './KeyValuePair';
 
class Main extends Component {
  render() {
    return (
        <div>
        {
        // <HashRouter>
        // <div>
        //   <h1>Simple SPA</h1>
        //   <ul className="header">
            
        //     <li><NavLink exact to="/">Home</NavLink></li>
        //     <li><NavLink to="/stuff">Stuff</NavLink></li>
        //     <li><NavLink to="/contact">Contact</NavLink></li>
        //   </ul>
        //   <div className="content">
        //      <Route exact path="/" component={Home}/>
        //     <Route path="/stuff" component={Stuff}/>
        //     <Route path="/contact" component={Contact}/>
        //   </div>
        // </div>
        // </HashRouter>


    }
  
        <Header />
        <Content />

     </div>
    );
  }
}

class Header extends Component{
render(){
    return(
        <HashRouter>
        <div>
        <ul className="header">
            
             <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/stuff">ComponentApi</NavLink></li>
              <li><NavLink to="/componentLifeCycle">Component-LifeCycle</NavLink></li>
             <li><NavLink to="/contact">Contact</NavLink></li>
             <li><NavLink to="/forms">Forms</NavLink></li>
             <li><NavLink to="/keyValue">key Value</NavLink></li>
             
          </ul>
        </div>
        </HashRouter>

    )
}
}
class Content extends Component{
    render(){
        return(
            <HashRouter>
            <div className="content">
                  <Route exact path="/" component={Home}/>
                  <Route path="/stuff" component={Stuff}/>
                  <Route path="/componentLifeCycle" component={ComponentLifeCycle}/>
                  <Route path="/contact" component={Contact}/>
                  <Route path="/forms" component={FormsMethod}/>
                  <Route path="/keyValue" component={KeyValuePair}/>
                  
              </div>
              </HashRouter>
        )
    }

}
export default Main;