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
              
                <div className="habit-tile" key={habits._id} >
                <div className="img-wrapper">
                <img src={habits.img} alt=""/>
                </div>
                <Link to={`/single-habit/${habits._id}`}>
                   <h3>{habits.title}</h3>
                   </Link>
                   <label class="container">
                  <input type="checkbox" checked/>
                  <span class="checkmark"></span>
                  </label>
                  
                 {/* <p>{habits.description} </p> */}
               </div>
               
               
                    )})
            : <h3>The list of habits is empty</h3>
          }
          <Link to="add-habit">
                    <button>
                      +
                    </button>
                  </Link>
        </div>
        )
    }

}
export default withAuth(Showhabits);

