import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import userService from "../lib/user-service";
import TodayEmpty from "./../components/TodayEmpty"
import habitService from "../lib/habit-service";

class Showhabits extends Component {
	state = { 
    listOfHabits: [] ,
    today : ''
  };
    

    getAllHabits = () => {  
    const userId = this.props.user._id;
    userService.showHabits(userId)
    .then((user)=> {
              
    this.setState({listOfHabits: user.habits})
    })
    }
    componentDidMount() {
    //  fetch the data from API befor initial render
    this.getAllHabits();  
    const today = (new Date()).getDate() + '' + (new Date().getMonth()+1) + '' + (new Date().getFullYear())
    this.setState({today})
  }
  HandleIsDone (event) {
   
    const currentHabit = this.state.listOfHabits[event.target.value]
    const habitId = event.target.name

    if (event.target.checked) {

      const newDays = currentHabit.days
      const habitToday = (new Date()).getDate() + '' + (new Date().getMonth()+1) + '' + (new Date().getFullYear())

      newDays.push(habitToday)
     
      habitService.updateDaysOfOne(habitId, newDays)
      .then(()=> this.getAllHabits())
    } else {
      const newDays = currentHabit.days
      newDays.pop()
      habitService.updateDaysOfOne(habitId, newDays)
      .then(()=> this.getAllHabits())
    }

  }
  
    render() {
      
      
      const {listOfHabits} = this.state
      
        return (
            <div className='habit-list'>
          { 
            listOfHabits.length ? 
            <div>
            {listOfHabits.map( (habit, index) => {
         
            return ( 
                <div key={index}>          
                  <div className="habit-tile" key={habit._id} >
                      <img src={habit.img} alt=""/>
                      <Link to={`/single-habit/${habit._id}`}>
                        <h3>{habit.title}</h3>
                      </Link>
                      <label className="container">
                      {
                        habit.days.length?
                          (habit.days[habit.days.length-1] === this.state.today)?
                          <input type="checkbox" name={habit._id} value={index} checked={true} onChange={(e)=>this.HandleIsDone(e)} />
                          :
                          <input type="checkbox" name={habit._id} value={index} checked={false} onChange={(e)=>this.HandleIsDone(e)} />
                        :
                        <input type="checkbox" name={habit._id} value={index} checked={false} onChange={(e)=>this.HandleIsDone(e)} />
                      }
                        <span className="checkmark"></span>
                      </label>
                  </div>
                  <div> 
            
                  </div> 
                </div>
                    )})}
                    <Link to="add-habit"> <p className="add-btn-full"><i className="fas fa-plus-circle"></i></p>
                  </Link>                       </div>
            : 
            <TodayEmpty/>
          }
          
        </div>
        )
    }

}
export default withAuth(Showhabits);

