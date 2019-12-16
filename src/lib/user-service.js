import axios from 'axios';

class User {
  constructor() {
    this.user = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
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

  showHabits(id) {
    return this.user
      .get(`/user/${id}`)
      .then(({ data }) => data);
  }
}

const userService = new User();

export default userService;
