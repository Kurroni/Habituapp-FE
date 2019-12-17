
import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import cloudinaryService from "./../lib/cloudinary-service";
import habitService from "./../lib/habit-service";
import userService from "./../lib/user-service";


class OneHabitComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
        img: '',
        title: '',
        description: ''
    }
  }

  componentDidMount(){
      console.log(this.props);
      
    const habitId = this.props.habitId;
    console.log(habitId);
    
    habitService.getOne(habitId)
    .then((habitObj)=> {
      console.log(habitObj);
      
      const {img, title, description} = habitObj;
      this.setState({img, title, description})
    })
  }
  
   render() {
    // const { img, title, description } = this.state;
    // const habitId = this.props.match.params.id;

    return (
      <div className="edit-habit-wrapper">
      {/* <Link className="goback-btn"><i class="fas fa-arrow-circle-left"></i></Link> */}
        <h1>Edit the habit</h1>

        
        <div className="habit-tile" key={this.state._id} >
            <img src={this.state.img} alt=""/>
            <h3>{this.state.title}</h3>
            <p>{this.state.description}</p>     
        </div>
        <button id="delete-btn">Delete habit</button>
      </div>
    );
  }
}

export default withAuth(OneHabitComponent);
