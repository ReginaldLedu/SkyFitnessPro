import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  courseUpdate,
  logoutUpdate,
  userUpdate,
} from "../store/reducers/mainReducers";
import AppRoutes from "./AppRoutes/AppRoutes";
import "./App.module.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(courseUpdate(JSON.parse(localStorage.getItem("course"))));
    dispatch(userUpdate(JSON.parse(localStorage.getItem("user"))));
    dispatch(logoutUpdate(JSON.parse(localStorage.getItem("logout"))));
  }, []);

  return <AppRoutes />;
}

export default App;
