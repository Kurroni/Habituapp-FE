import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';

class SingleHabit extends Component {
    render() {
        const habitId = this.props.match.params.id
        return (
            <div>
               <p>Single habit page</p> 
               <Link to={`/edit-habit/${habitId}`}>
                   <button>Edit</button>
               </Link>
            </div>
            
        )
    }
}

export default SingleHabit