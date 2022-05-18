import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Login from "./Pages/Authentication/Login";
import Signup from "./Pages/Authentication/Signup";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import RequireAuth from "./Pages/Shared/RequireAuth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Pages/Dashboard/Dashboard";
import ApointmentReview from "./Pages/Dashboard/ApointmentReview";
import Review from "./Pages/Dashboard/Review";
import History from "./Pages/Dashboard/History";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Dashboard/RequireAdmin";
import AddaDoctor from "./Pages/Dashboard/AddaDoctor";
import ManageDoctor from "./Pages/Dashboard/ManageDoctor";

function App() {
  return (
    <div className='container mx-auto overflow-hidden max-w-7xl'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/appointment" element={<RequireAuth><Appointment></Appointment></RequireAuth>}></Route>

        <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<ApointmentReview></ApointmentReview>}></Route>
          <Route path="/dashboard/review" element={<Review></Review>}></Route>
          <Route path="/dashboard/history" element={<History></History>}></Route>
          <Route path="/dashboard/users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="/dashboard/adddoctor" element={<RequireAdmin><AddaDoctor></AddaDoctor></RequireAdmin>}></Route>
          <Route path="/dashboard/managedr" element={<RequireAdmin><ManageDoctor></ManageDoctor></RequireAdmin>}></Route>
        </Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
