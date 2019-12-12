import axios from 'axios';

class Habit {
    constructor() {
      this.auth = axios.create({
        baseURL: 'http://localhost:5000',
        withCredentials: true,
      });
    }
    createOne (habitObj) {
      return this.auth
      .post('/habit', habitObj)  //what we send BE
      .then((newHabit)=> newHabit.data) //DB response, habitObj but with ID
    }
   
    getOne (id) {
      return this.auth
      .get('/habit/:id', id)  //what we send BE
      .then(habitObj) //DB response, habitObj but with ID
    }
    //this is doubled withupdateTheHabits in user-service??
    updateOne (id) {
      return this.auth
      .post('/habit/', habitObj)  //what we send BE
      .then(newHabit) //DB response, habitObj but with ID
    }
    deleteOne (id) {
      return this.auth
      .post('/habit', habitObj)  //what we send BE
      .then(newHabit) //DB response, habitObj but with ID
  }




    // this for later for use with prepared form etc. in components
    // .then((habitObj) => {
    //     const newHabits = user.habits;
    //     newHabits.push(habitObj._id);

    //     User.updateTheHabits (user._id, newHabits)
    //     .then((user) => redirect)

    // })
}

const axiosRequestFunctions = new Habit();

export default axiosRequestFunctions;