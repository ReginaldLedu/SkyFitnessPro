import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Main from "../../pages/Main/Main";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Description from "../../pages/Description/Description";
import Profile from "../../pages/Profile/Profile";
import Workout from "../../pages/Workout/Workout";
import NotFound from "../../pages/NotFound/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/description" element={<Description />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/workout" element={<Workout />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
