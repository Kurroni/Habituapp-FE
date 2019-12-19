
import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

import habitService from "./../lib/habit-service";


class OneHabitComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
        img: '',
        title: '',
        description: '',
        days: []
    }
  }

  componentDidMount(){
           
    const habitId = this.props.habitId;
       
    habitService.getOne(habitId)
    .then((habitObj)=> {
           
      const {img, title, description, days} = habitObj;
      this.setState({img, title, description, days})
    })
  }
  
   render() {
   
    return (
      <div>
                      
        <div className="onehabit-wrapper" key={this.state._id} >
        <h3 id="onehabit-title">{this.state.title}</h3>
            <img id="onehabit-img" src={this.state.img} alt=""/>
            <p id="onehabit-desc">{this.state.description}</p>  

            <p>Total times done: {this.state.days.length}</p>   
        </div>
        
      </div>
    );
  }
}

export default withAuth(OneHabitComponent);
