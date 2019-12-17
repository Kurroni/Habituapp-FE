import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';
import OneHabitComponent from './../components/OneHabitComponent'
import CalendarComponent from './../components/CalendarComponent'

class SingleHabit extends Component {
    render() {
        const habitId = this.props.match.params.id
        console.log(habitId);
        
        return (
            <div className="single-habit-page">
               <OneHabitComponent habitId={habitId}/>
               <CalendarComponent/>
               <Link to={`/edit-habit/${habitId}`}>
                   <button className="edit-btn">Edit</button>
               </Link>
            </div>
            
        )
    }
}

export default withAuth(SingleHabit);