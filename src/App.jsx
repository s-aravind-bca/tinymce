import React from "react";
import "./app.css";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import Tinymce from "./Components/Tinymce/Tinymce";
import Chatgpt from "./Components/Chatgpt/Chatgpt";
import Translate from "./Components/Translate/Translate";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Dashboard from "./Components/Dashboard/Dashboard";
import AdminDashboard from "./Components/AdminDashboard/ADashboard";
import ForgetPassword from "./Components/Forget-Password/ForgetPassword";
import Otp from "./Components/Forget-Password/Otp";
import Reset from "./Components/Forget-Password/Reset";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import AuthCheck from "./Components/AuthCheck/AuthCheck";
import TaskGroup from "./Components/TaskGroup/TaskGroup";
import Advertisement from "./Components/Advertisement/Advertisement";
import AICreator from "./Components/AICreator/AICreator";
import MailHistory from "./Components/MailHistory/MailHistory";
import ExportData from "./Components/ExportData/ExportData";

const App = () => {
  return (
    <>
      <Routes>
        <Route Component={AuthCheck}>
          <Route path="/" Component={Login} />
          <Route path="/signup" Component={Signup} />
          <Route path="/forgot-password" Component={ForgetPassword} />
          <Route path="/otp" Component={Otp} />
          <Route path="/reset" Component={Reset} />
        </Route>
        <Route Component={ProtectedRoute}>
          <Route path="/dashboard" Component={Dashboard}>
            <Route path="task-group" Component={TaskGroup} />
            <Route path="" Component={Tinymce} />
            <Route path="translate" Component={Translate} />
            <Route path="advertisement" Component={Advertisement} />
            <Route path="ai-creator" Component={AICreator} />
            <Route path="history" Component={MailHistory} />
            <Route path="export" Component={ExportData} />
            <Route path="chat" Component={Chatgpt} />
          </Route>
          <Route path="/admin" Component={AdminDashboard} />
        </Route>
      </Routes>
    </>
  );
};

export default App;