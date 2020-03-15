import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component{
   render(){
      return (
         <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         </button>
         
            <Link to="/" className="navbar-brand">ExerciseTracker</Link>
            <div className="collapse navbar-collapse">
               <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                     <Link to="/" className="nav-link">Exercises</Link>
                  </li>
                  <li className="navbar-item">
                     <Link to="/create" className="nav-link">Create Exercise Log</Link>
                  </li>
                  <li className="navbar-item">
                     <Link to="/user" className="nav-link">Create User</Link>
                  </li>
               </ul>

            </div>
         </nav>
      );
   }
}