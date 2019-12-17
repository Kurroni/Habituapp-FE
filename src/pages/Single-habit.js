import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';
import OneHabitComponent from './../components/OneHabitComponent'

class SingleHabit extends Component {
    render() {
        const habitId = this.props.match.params.id
        console.log(habitId);
        
        return (
            <div>
               <OneHabitComponent habitId={habitId}/>
               <Link to={`/edit-habit/${habitId}`}>
                   <button>Edit</button>
               </Link>
            </div>
            
        )
    }
}

export default withAuth(SingleHabit);