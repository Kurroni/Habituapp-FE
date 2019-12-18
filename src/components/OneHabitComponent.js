
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
      <div>
      {/* <Link className="goback-btn"><i class="fas fa-arrow-circle-left"></i></Link> */}
                
        <div className="onehabit-wrapper" key={this.state._id} >
        <h3 id="onehabit-title">{this.state.title}</h3>
            <img id="onehabit-img" src={this.state.img} alt=""/>
            <p id="onehabit-desc">{this.state.description}</p>     
        </div>
        
      </div>
    );
  }
}

export default withAuth(OneHabitComponent);
