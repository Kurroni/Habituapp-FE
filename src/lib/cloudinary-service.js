import axios from 'axios';

class Cloudinary {
  constructor() {
    this.auth = axios.create({
      baseURL: 'http://localhost:5000',
      withCredentials: true,
    });
  }

 imageUpload (imageFile) {
    return this.auth
    .post('/cloudinary', imageFile)  //what we send BE
    .then((imageUrl)=>imageUrl.data) //DB response, habitObj but with ID

  }

}

const cloudinaryService = new Cloudinary();

export default cloudinaryService;