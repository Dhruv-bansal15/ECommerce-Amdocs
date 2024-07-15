import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import {useStateValue} from "./StateProvider"
import { auth } from "./firebase";

function Header() {
  const [{basket, user}] = useStateValue();
  const login = ()=> {
    if(user){
      auth.signOut();
    }
  }
  console.log(basket);
  return (
    <nav className="header">
      <Link to="/">
        <p className="header__logo">
          ECommerce
        </p>
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
      </div>
      <div className="header__nav">
        <Link to={ !user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In' }</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
