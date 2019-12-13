import axios from 'axios';

class User {
  constructor() {
    this.auth = axios.create({
      baseURL: 'http://localhost:5000',
      withCredentials: true,
    });
  }

  getOne(id) {
    return this.user
      .get(`/user/:${id}`)
      .then(({ data }) => data);
  }

  updateTheHabits(id, habitsIds) {
    const { username, password } = user;
    return this.user
      .put(`/user/:${id}`, { habits: habitsIds })
      .then(({ data }) => data);
  }

}

const userService = new User();

export default userService;
