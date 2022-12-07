import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile"
import Home from "./pages/home/Home";
import Event from "./pages/event/Event";
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
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}>
      <Router>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/event" element={<Event/>}/>
            <Route path="/profile/:username" element={<Profile/>}/>
          </Routes>
      </Router>
    </GoogleOAuthProvider>
    )
}

export default App;
