import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import cloudinaryService from "./../lib/cloudinary-service";
import userService from "../lib/user-service";
import TodayEmpty from "./../components/TodayEmpty"

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
            <div>
            {listOfHabits.map( (habits) => {
            return ( 
                <div>          
                  <div className="habit-tile" key={habits._id} >
                      <img src={habits.img} alt=""/>
                      <Link to={`/single-habit/${habits._id}`}>
                        <h3>{habits.title}</h3>
                      </Link>
                      <label class="container">
                        <input type="checkbox" checked/>
                        <span class="checkmark"></span>
                      </label>
                  </div>
                  <div> 
            
                  </div> 
                </div>
                    )})}
                    <Link to="add-habit"> <p className="add-btn-full"><i class="fas fa-plus-circle"></i></p>
                  </Link>                       </div>
            : 
            <TodayEmpty/>
          }
          
        </div>
        )
    }

}
export default withAuth(Showhabits);

