import { SubmissionError } from 'redux-form';
import { sessionService } from 'redux-react-native-session';
import userApi from '../api/userApi';

export const login = user =>
  () =>
    userApi.login({ user }).then(({ data }) => {
      console.log("here");
      sessionService.saveUser(data);
    }).catch((err) => {
      throw new SubmissionError({
        _error: err.errors[0]
      });
    });
