import React from "react";
import Home from './Home';
import Contact from './Contact';
import About from './About';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default class MyNavBar extends React.Component {
  render() {
    return (
    
       <Router>
       <div>
         <nav id="nav">
           <ul>
             <li>
               <Link to="/about">About</Link>
             </li>
             <li>
               <Link to="/">Home</Link>
             </li>
             <li>
               <Link to="/contact">Contact</Link>
             </li>
           </ul>
         </nav>
 
         {/* A <Switch> looks through its children <Route>s and
             renders the first one that matches the current URL. */}
         <Switch>
           <Route path="/about">
             <About />
           </Route>
           <Route path="/contact">
             <Contact />
           </Route>
           <Route path="/">
             <Home />
           </Route>
         </Switch>
       </div>
       </Router>
    );
  }
}
