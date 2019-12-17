import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';


class TodayEmpty extends Component {
  
   render() {
       return(
        <div className="empty-list-wrapper">        <h3 className="emptylist-header">Create your new habit starting today!</h3>
        
      
            <Link to="add-habit">
            <p className="add-btn-empty"><i class="fas fa-plus-circle"></i></p>
            </Link>
        </div>
       )
      }
    };

export default withAuth(TodayEmpty);
