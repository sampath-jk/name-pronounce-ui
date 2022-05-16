
import React from "react";
import {BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./Login/Login.jsx";
import UserProfile from "./UserProfile/UserProfile.jsx";
import CustomPronounce from "./UserProfile/CustomPronounce";
import { IntlProvider } from "react-intl";
 import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from "react-redux";
import {userLogout} from './services/action/loginActions';

 //addLocaleData(en);
function App ()  {

const user = useSelector((state) => state.user);
  
const dispatch = useDispatch();
  
    const index = "/namePronounce";
  return (
    <IntlProvider
      locale="en">
    <Router >
      <div>
        <nav className="navbar navbar-expand header">
        <h2 className="wells_header">
            WELLS FARGO
          </h2>
          
          <h2  className="navbar-brand">
            AI Titans - Hackothan 2022
          </h2>
          
          {user.loginSuccess ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/namePronounce/profile"} className="nav-link nav-header">
                  {user.loggedInUser}
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/namePronounce/login"} className="nav-link" onClick={() => dispatch(userLogout())}>
                  LogOut
                </Link>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/namePronounce/login"} className="nav-header nav-link" >
                  Login
                </Link>
              </li>
            </div>
           )} 
        </nav>
        <div className="container mt-3">
          <Routes>
          <Route path="/" element={<Navigate to={index} />} />
            <Route path={"/namePronounce"} element={<Login />} />
            <Route path="/namePronounce/login" element={<Login />} />
            <Route path="/namePronounce/profile" element={<UserProfile />} />
           {/* <Route path="/namePronounce/customPronounce" element={<CustomPronounce/>} />
             <Route exact path="/profile" component={Login} />
            <Route path="/user" component={Login} />
            <Route path="/mod" component={Login} />
            <Route path="/admin" component={Login} /> */}
          </Routes>
        </div>
      </div>
    </Router>
    </IntlProvider>
  );
};
export default App;