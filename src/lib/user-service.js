import axios from 'axios';

class User {
  constructor() {
    this.user = axios.create({
      baseURL: 'http://localhost:5000',
      withCredentials: true,
    });
  }

  getOne(id) {
    return this.user
      .get(`/user/${id}`)
      .then(({ data }) => data);
  }

  updateTheHabits(id, habitsId) {
     return this.user
      .put(`/user/${id}`, {habitsId: habitsId})
      .then(({ data }) => console.log(data));
      }
}

const userService = new User();

export default userService;
