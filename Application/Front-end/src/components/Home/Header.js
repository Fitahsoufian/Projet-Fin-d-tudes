import React from 'react';
import {} from "@mui/material";
import { BarChart, SearchRounded, ShoppingCartRounded } from "@mui/icons-material";

function Header() {
  return (
    <header>
         <div className="Name">
         ππ¦π‘π‘ππ£πΈππ   
        
        </div>
        <div className="auth">
        <div className="inputBox">
            <SearchRounded className="searchIcon" />
            <input type="text" placeholder="Search ......." />
        </div>
        <div className="toggleMenu">
        <a href='/signup'>Sign Up</a>
        </div>
        <div className="toggleMenu">
        <a href='/signin'>Sign In</a>
        </div>
        </div>

    </header>
  );
}

export default Header;