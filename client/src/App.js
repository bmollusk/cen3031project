import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile"
import Home from "./pages/home/Home";
import Event from "./pages/event/Event";
import CleanupMapPage from "./pages/map/CleanupMapPage";
import React from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <GoogleOAuthProvider clientId={"1092854813416-1hu6kdilsl7us4ikvq8967n0756ufik5.apps.googleusercontent.com"}>
      <Router>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/event" element={<Event/>}/>
            <Route path="/profile/:username" element={<Profile/>}/>
            <Route path="/map" element={<CleanupMapPage cleanuparr = {[[34.298409, -83.832855], [34.297409, -83.842855]]}/>}/>
          </Routes>
      </Router>
    </GoogleOAuthProvider>
    )
}

export default App;
