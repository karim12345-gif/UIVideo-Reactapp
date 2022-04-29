import React, { useState, useEffect } from "react";
import { auth } from "../../firebase/config";
import TextField from "@mui/material/TextField";
import axios from '../../tmDB/axios'
import './Navbar.css'
import {
  StarIcon,
  FilmIcon,
  PlusIcon,
} from "@heroicons/react/solid";

const Navbar = ({ user }) => {
  // setting the navbar to fixed
  const [fixed, setFixed] = useState(false);
  // getting the search result from the user 
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);

  // add in the nav bar icons for styling and make the search bar a bit smaller 


  // using DOM to control the scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.screenY > 100) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    });
  });
  return (
    <div className={`navbar ${fixed && "fixedNav"}`}>
      <a href="#" className="brand">
        <h1 className="title">KS</h1>
      </a>
    
      <a className="icons">
        <StarIcon className="Star-icon"  />
        <span className="span">Star</span>
      </a>
      <a className="icons">
        <FilmIcon className="film-icon"  />
        <span className="span">Film</span>
      </a>
      <a className="icons">
          <PlusIcon className="plus-icon" />
            <span className="span">Plus</span>
      </a>
     
    
     
      <div className="search">
        <TextField
        style={{flex:1}}
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {/* log out with sign out */}
       
      <button className="authButton" onClick={() => auth.signOut()}>
        {/* this will display the users google Photo */}
        <img src={user.photoURL} alt="auth user" className='userImage' />
      </button>
    </div>
  );
};

export default Navbar;
