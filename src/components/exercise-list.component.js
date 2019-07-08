import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Exercise=props=>(
   <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0,10)}</td>
      <td>
         <Link to={"/edit/"+props.exercise._id}>Edit</Link> | <a href='#' onClick={()=>{props.deleteExercise(props.exercise._id)}}>Delete</a>
      </td>
   </tr>
);

export default class ExerciseList extends Component{
   constructor(props)
   {
      super(props);
      this.state={exercises:[],cardStyle:{width:350,display:'inline-block'}};
   }

   componentDidMount()
   {
      axios.get('http://localhost:5000/exercises')
      .then((res)=>
      {
         this.setState({
            exercises:res.data
         });
      })
      .catch((err)=>console.log(err));
   }

deleteExercise=(id)=>{
   axios.delete('http://localhost:5000/'+id)
   .then(res=>console.log(res.data));
   this.setState(
      {exercises:this.state.exercises.filter((element=>element._id !== id))}
   );
}

exerciseList=()=>{
   return this.state.exercises.map(currentexercise=>{
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />
   })
}

   render(){
      return(
         <div>
            <h3>Logged Exercises</h3>
            <table className="table">
               <thead>
                  <tr>
                     <th>Username</th>
                     <th>Description</th>
                     <th>Duration</th>
                     <th>Date</th>
                     <th>Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {this.exerciseList()}
               </tbody>
            </table>            
         </div>
      );
   }
}