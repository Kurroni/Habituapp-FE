import axios from "axios";

class Habit {
  constructor() {
    this.habit = axios.create({
      baseURL: "http://localhost:5000/habits",
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
      .get('/:id', id)  //what we send BE
      .then(habitObj => habitObj.data) //DB response, habitObj but with ID
  }

  //   updateOne (id) {
  //     return this.habit
  //     .post('/habit/', habitObj)  //what we send BE
  //     .then(newHabit) //DB response, habitObj but with ID
  //   }
  //   deleteOne (id) {
  //     return this.habit
  //     .post('/habit', habitObj)  //what we send BE
  //     .then(newHabit) //DB response, habitObj but with ID
  // }

}

const habitService = new Habit();

export default habitService;
