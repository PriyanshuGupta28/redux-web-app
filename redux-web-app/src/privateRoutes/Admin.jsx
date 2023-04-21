import { useSelector } from "react-redux";

const Admin = ({ children }) => {
  const { role } = useSelector((store) => store.authReducer);
  return role === "root" ? children : "UnAuthorized";
};

export default Admin;
