import api from './apiService';

class Session {
  static login(user) {
    console.log("logining");
    return api.post('/users/sign_in', user);
  }
}

export default Session;
