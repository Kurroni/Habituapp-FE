import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
// import { Link } from "react-router-dom";
import cloudinaryService from "./../lib/cloudinary-service";
import habitService from "./../lib/habit-service";

class Addhabit extends Component {
  state = { img: "", title: "", description: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { img, title, description } = this.state;
    habitService.createOne({ img, title, description }).then(newHabit => {
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
        <h1>Create a new habit</h1>

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
            value={title}
            onChange={this.handleChange}
          />

          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={this.handleChange}
          />

          <input type="submit" value="Create" />
        </form>
      </div>
    );
  }
}

export default withAuth(Addhabit);
