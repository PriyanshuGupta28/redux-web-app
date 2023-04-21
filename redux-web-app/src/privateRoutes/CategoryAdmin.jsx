import { useSelector } from "react-redux";

const CategoryAdmin = ({ children }) => {
  const { role } = useSelector((store) => store.authReducer);
  return role === "super_category_admin" ? children : "UnAuthorized";
};

export default CategoryAdmin;
