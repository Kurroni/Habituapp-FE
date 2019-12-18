import axios from "axios";

class Habit {
  constructor() {
    this.habit = axios.create({
      baseURL: process.env.REACT_APP_API_URL +'/habits',
      withCredentials: true
    });
  }

  createOne(habitObj) {
    return this.habit
      .post("/", habitObj) //what we send BE
      .then(newHabit => newHabit.data); //DB response, habitObj but with ID
  }

  getOne (id) {
    return this.habit
      .get(`/${id}`)  //what we send BE
      .then(habitObj => habitObj.data) //DB response, habitObj but with ID
  }

  updateOne (id, habitObj) {
    return this.habit
      .put(`/${id}`, habitObj)  //what we send BE
      .then(newHabit => newHabit.data) //DB response, habitObj but with ID
    }
    deleteOne (id, habitObj) {
      return this.habit
      .delete(`/${id}`, habitObj)  //what we send BE
      .then() //DB response, habitObj but with ID
  }

}

const habitService = new Habit();

export default habitService;
