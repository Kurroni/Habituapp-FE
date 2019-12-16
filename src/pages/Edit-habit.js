import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
// import { Link } from "react-router-dom";
import cloudinaryService from "./../lib/cloudinary-service";
import habitService from "./../lib/habit-service";

class Edithabit extends Component {
  constructor(props){
    super(props);
    this.state = {
        img: this.props.theHabit.img,//shouldn't be req.params??
        title: this.props.theHabit.title,
        description: this.props.theHabit.description
    }
  }
  
  handleFormSubmit = event => {
    event.preventDefault();
    const { img, title, description } = this.state;
    const { _id } = this.props.theHabit;

    habitService.updateOne({ img, title, description }).then(newHabit => {
      console.log(newHabit);
    });
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
    const { img, title, description } = this.state;

    return (
      <div>
      <button>Go back</button>
        <h1>Edit the habit</h1>

        <img style={{ width: 200, height: 'auto'}} src={this.state.img} alt=""/>
        <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
          <label>Photo:</label>
          <input
            type="file"
            name="photo"
            onChange={event => this.handlePhotoChange(event)}
          />

          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />

          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />

          <input type="submit" value="Save" />
        </form>
        <button>Delete habit</button>
      </div>
    );
  }
}

export default withAuth(Edithabit);