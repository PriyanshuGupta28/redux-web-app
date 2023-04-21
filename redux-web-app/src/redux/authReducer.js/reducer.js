import {
  LOGINFAILURE,
  LOGINREQUEST,
  LOGINROLE,
  LOGINSUCCESS,
} from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  auth: false,
  token: "",
  role: "",
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGINREQUEST:
      return { ...state, isLoading: true, auth: false };
    case LOGINSUCCESS:
      return { ...state, isLoading: false, auth: true, token: payload };
    case LOGINFAILURE:
      return { ...state, isLoading: false, auth: false };
    case LOGINROLE:
      return { ...state, role: payload };
    default:
      return state;
  }
};
