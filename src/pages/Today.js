import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import cloudinaryService from "./../lib/cloudinary-service";
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
        console.log('USER', user);
        
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
    console.log('E.TARGET',event.target.checked);
    console.log('habit.id',event.target.name);
    console.log('index', event.target.value);
    console.log('current',this.state.listOfHabits[event.target.value])
    const currentHabit = this.state.listOfHabits[event.target.value]
    const habitId = event.target.name

    if (event.target.checked) {

      const newDays = currentHabit.days
      const habitToday = (new Date()).getDate() + '' + (new Date().getMonth()+1) + '' + (new Date().getFullYear())

      console.log('newDays',newDays);
      console.log(habitToday);
      console.log(this.state.today);

      newDays.push(habitToday)
      console.log('newDays after',newDays);

      habitService.updateDaysOfOne(habitId, newDays)
      .then(()=> this.getAllHabits())
    } else {
      const newDays = currentHabit.days
      newDays.pop()
      habitService.updateDaysOfOne(habitId, newDays)
      .then(()=> this.getAllHabits())
    }

      }
  // checkIfDone = (oneHabit) => {
  //   if (oneHabit.days[days.lenght-1] === )
  // }

    render() {
      
      
      const {listOfHabits} = this.state
      console.log('LIST OF HABITS',listOfHabits);

        return (
            <div className='habit-list'>
          { 
            listOfHabits.length ? 
            <div>
            {listOfHabits.map( (habit, index) => {
            return ( 
                <div>          
                  <div className="habit-tile" key={habit._id} >
                      <img src={habit.img} alt=""/>
                      <Link to={`/single-habit/${habit._id}`}>
                        <h3>{habit.title}</h3>
                      </Link>
                      <label class="container">
                      {
                        habit.days.length?
                          (habit.days[habit.days.length-1] === this.state.today)?
                          <input type="checkbox" name={habit._id} value={index} checked={true} onChange={(e)=>this.HandleIsDone(e)} />
                          :
                          <input type="checkbox" name={habit._id} value={index} checked={false} onChange={(e)=>this.HandleIsDone(e)} />
                        :
                        <input type="checkbox" name={habit._id} value={index} checked={false} onChange={(e)=>this.HandleIsDone(e)} />
                      }
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

