import fetch, { http } from '../store/fetch.config';

export const login = (body) => {
  return async(dispatch) => {
    const response = await fetch(http.post(body), 'http://localhost:3000/login');
    if (!response.error) {
      dispatch({ type: 'LOGIN_AUTH', payload: response });
    } else {
      dispatch({ type: 'LOGIN_FAILED', payload: response });
    }
  };
};