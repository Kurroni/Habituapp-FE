import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import OneHabitComponent from "./../components/OneHabitComponent";
import CalendarComponent from "./../components/CalendarComponent";
import habitService from "./../lib/habit-service";

class SingleHabit extends Component {
  deleteHabit = () => {
    const habitId = this.props.match.params.id;
    habitService.deleteOne(habitId)
        .then(()=> {
            this.props.history.push("/today")
        })
  };

  render() {
    const habitId = this.props.match.params.id;
    // console.log('habitId from single habit',habitId);

    return (
      <div className="single-habit-page">
        <button id="delete-btn" onClick={this.deleteHabit}>
          Delete habit
        </button>
        <Link to="/today" className="goback-btn">
          <i class="fas fa-arrow-circle-left"></i>
        </Link>
        <OneHabitComponent habitId={habitId} />
        {/* <CalendarComponent /> */}
        <Link to={`/edit-habit/${habitId}`}>
          <button className="edit-btn">Edit</button>
        </Link>
      </div>
    );
  }
}

export default withAuth(SingleHabit);
