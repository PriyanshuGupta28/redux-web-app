import axios from "axios";
import {
  LOGINFAILURE,
  LOGINREQUEST,
  LOGINROLE,
  LOGINSUCCESS,
} from "./actionTypes";

const AxiosInstance = axios.create({
  baseURL: "http://15.206.185.75:4001/vtrnliveweb/",
  headers: {
    "Content-Type": "application/json",
  },
});
export const login = (userData) => async (dispatch) => {
  try {
    console.log(userData, "userData");
    dispatch({ type: LOGINREQUEST });
    const Data = await AxiosInstance.post("adminLogin", userData);
    dispatch({ type: LOGINSUCCESS, payload: Data?.data?.access_token });
    console.log(Data?.data?.access_token);
    dispatch({
      type: LOGINROLE,
      payload: Data?.data?.user_data?.admin_role_name,
    });
    console.log(Data);
  } catch (error) {
    dispatch({ type: LOGINFAILURE });
    console.log(error);
  }

  // axios
  //   .post("adminLogin", userData)
  //   .then((res) => {
  //     dispatch({ type: LOGINSUCCESS, payload: res.data.token });
  //     console.log(res.data.token);
  //   })
  //   .catch((err) => {
  //     dispatch({ type: LOGINFAILURE });
  //     console.log(err);
  //   });
};
