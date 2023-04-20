import axios from "axios";
import { LOGINFAILURE, LOGINREQUEST, LOGINSUCCESS } from "./actionTypes";

export const login = (userData) => (dispatch) => {
  dispatch({ type: LOGINREQUEST });
  axios
    .post("https://reqres.in/api/login", userData)
    .then((res) => {
      dispatch({ type: LOGINSUCCESS, payload: res.data.token });
      console.log(res.data.token);
    })
    .catch((err) => {
      dispatch({ type: LOGINFAILURE });
      console.log(err);
    });
};
