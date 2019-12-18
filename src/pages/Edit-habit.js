import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import cloudinaryService from "./../lib/cloudinary-service";
import habitService from "./../lib/habit-service";
import userService from "./../lib/user-service";


class Edithabit extends Component {
  constructor(props){
    super(props);
    this.state = {
        img: '',
        title: '',
        description: ''
    }
  }

  componentDidMount(){
    const habitId = this.props.match.params.id;
    console.log(habitId);
    
    habitService.getOne(habitId)
    .then((habitObj)=> {
      console.log(habitObj);
      
      const {img, title, description} = habitObj;
      this.setState({img, title, description})
    })
  }
  
  handleFormSubmit = event => {
    event.preventDefault();
    const { img, title, description } = this.state;
    const habitId = this.props.match.params.id;

    habitService.updateOne(habitId, { img, title, description }).then(()=> {
      this.props.history.push("/today")
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

  deleteHabit = () => {
    const habitId = this.props.match.params.id;
    habitService.deleteOne(habitId)
      .then(()=> {
        this.props.history.push("/today")
      })
  };

  render() {
    const { img, title, description } = this.state;
    const habitId = this.props.match.params.id;
    return (
      <div className="edit-habit-wrapper">
      <button id="delete-btn" onClick={this.deleteHabit}>
          Delete habit
        </button>
      <Link to={`/single-habit/${habitId}`}  className="goback-btn"><i class="fas fa-arrow-circle-left"></i></Link>
        <h1>Edit the habit</h1>

        
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
            onChange={this.handleChange} rows="7" cols="30">Short description.
            </textarea>

          <input id="save-btn" type="submit" value="Save" />
        </form>
              </div>
    );
  }
}

export default withAuth(Edithabit);
