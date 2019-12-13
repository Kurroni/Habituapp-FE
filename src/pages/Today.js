import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import cloudinaryService from "./../lib/cloudinary-service";
import userService from "../lib/user-service";

class Showhabits extends Component {
	state = { 
    listOfHabits: [] 
  };
    

    getAllHabits = () => {  
    const userId = this.props.user._id;
    userService.showHabits(userId)
    .then((user)=> {
        console.log('USER', user);
        
    this.setState({listOfHabits: user.habits})
    })
    }
    componentDidMount() {
    //  fetch the data from API befor initial render
    this.getAllHabits();  
  }

    render() {
        const {listOfHabits} = this.state
        
        
        return (
            <div className='habit-list'>
          { 
            listOfHabits.length ? 
            listOfHabits.map( (habits) => {
            return (
              
                <div key={habits._id} className='habit'>
                <img src={habits.img} alt=""/>
                  <h3>{habits.title}</h3>
                  <p>{habits.description} </p>
               </div>
             
                    )})
            : <h3>The list of habits is empty</h3>
          }
        </div>
        )
    }

}
export default withAuth(Showhabits);

