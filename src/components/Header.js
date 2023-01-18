import { useState } from "react";
import logo from "../../assets/img/food-villa.png";
import { Link } from "react-router-dom";
import Login from "./Login";

const Title = () => (
  <a href="/">
    <img alt="logo" className="logo" src={logo}></img>
  </a>
);

export default Header = () => {
  // let [isLogin, setIsLogIn] = useState(false);
  return (
    <>
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/login">
                <button
                  onClick={() => {
                    <Login />;
                  }}
                >
                  Login
                </button>
              </Link>
            </li>

            {/* {isLogin ? (
              <button onClick={() => setIsLogIn(false)}> Logout</button>
            ) : (
              <button onClick={() => setIsLogIn(true)}> Login</button>
            )} */}
          </ul>
        </div>
      </div>
    </>
  );
};
