import axios from 'axios';

class User {
  constructor() {
    this.auth = axios.create({
      baseURL: 'http://localhost:5000',
      withCredentials: true,
    });
  }

//   i probably dont need it as i ll use auth/me
//   getOne(id) {
//     const { id } = user;
//     return this.user
//       .post('/', {})
//       .then(({ data }) => data);
//   }

  updateTheHabits(id, habitsIds) {
    const { username, password } = user;
    return this.user
      .put(`/user/:${id}`, { habits: habitsIds })
      .then(({ data }) => data);
  }

}

const userService = new User();

export default userService;
