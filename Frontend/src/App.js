import logo from "./logo.svg";
import "./App.css";
import "antd/dist/reset.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Register from "./pages/Register.js";
import { UseSelector, useSelector } from "react-redux";
import Spinner from "./Component/Spinner.js";
import ProtectedRoute from "./Component/ProtectedRoute.js";
import PublicRoute from "./Component/PublicRoute.js";
import ApplyDoctor from "./pages/ApplyDoctor.js";
import Notification from "./pages/Notification.js";
import Users from "./pages/admin/Users.js";
import Doctors from "./pages/admin/Doctors.js";
import Appointments from "./pages/Appointments";
import DoctorAppointments from "./pages/doctor/DoctorAppointments";


function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <Router>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/apply-doctor"
              element={
                <ProtectedRoute>
                  <ApplyDoctor />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute>
                  <Users />
                </ProtectedRoute>
              }
            />
              <Route
              path="/admin/users/admin/doctors"
              element={
                <ProtectedRoute>
                  <Doctors />
                </ProtectedRoute>
              }
            />
            <Route
              path="/notification"
              element={
                <ProtectedRoute>
                  {" "}
                  <Notification />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
 <Route
              path="/appointments"
              element={
                <ProtectedRoute>
                  <Appointments />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctor-appointments"
              element={
                <ProtectedRoute>
                  <DoctorAppointments />
                </ProtectedRoute>
              }
            />
          

          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
