import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import cloudinaryService from "./../lib/cloudinary-service";
import habitService from "./../lib/habit-service";
import userService from "../lib/user-service";

class Addhabit extends Component {
  state = { img: "", title: "", description: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { img, title, description } = this.state;
    habitService.createOne({ img, title, description })
    .then(newHabit => {
      console.log(newHabit);
      const userId = this.props.user._id
      console.log(userId);
      
      userService.updateTheHabits(userId, newHabit._id)
    })
    .then(()=> {
      
      
      this.props.history.push("/today", this.state)
    })
  };

  handlePhotoChange = event => {
    console.log(event.target.files[0]);
    const file = event.target.files[0];
    const imageFile = new FormData();
    imageFile.append("photo", file);
    cloudinaryService.imageUpload(imageFile).then(imageUrl => {
      console.log(imageUrl);
      this.setState({ img: imageUrl });
    });
    console.log(this.state);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    console.log('history', this.props.history)
    const { img, title, description } = this.state;

    return (
      <div className="edit-habit-wrapper">
      <Link to="/today" className="goback-btn"><i class="fas fa-arrow-circle-left"></i></Link>
        <h1>Create the habit</h1>

        
        <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
          <label>Photo:</label>
          <input className='input-img'
            type="file"
            name="photo"
            onChange={event => this.handlePhotoChange(event)}
          />
          <div className="img-edit">
          <img style={{ width: 'auto', height: '140px'}} src={this.state.img} alt=""/>
          </div>

          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />

          <label>Description:</label>
          <textarea type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange} rows="7" cols="30">
            </textarea>

          <input id="save-btn" type="submit" value="Create" />
        </form>
      </div>
    );
  }
}

export default withAuth(Addhabit);
