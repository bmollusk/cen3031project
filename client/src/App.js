import React, { useState, useEffect } from 'react'
import Login from "./pages/login/Login";
import Register from "./pages/register/Register"
import Home from "./pages/home/Home"
import Event from "./pages/event/Event"
import postService from './services/posts'

const App = () => {
  const [allPosts, setAllPosts] = useState([])
  const getAllPosts = async () =>{
    const posts = await postService.getAll()
    setAllPosts(posts)
    console.log(posts)
  }
    useEffect(() => {
      getAllPosts()
    },[])
  
  return <Home />;
}

export default App;
