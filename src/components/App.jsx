import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { courseUpdate } from "../store/reducers/mainReducers";
import AppRoutes from "./AppRoutes/AppRoutes";
import "./App.module.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(courseUpdate(JSON.parse(localStorage.getItem("course"))));
  }, []);

  return <AppRoutes />;
}

export default App;
