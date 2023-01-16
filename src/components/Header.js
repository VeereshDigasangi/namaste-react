import { useState } from "react";
import logo from "../../assets/img/food-villa.png";

const Title = () => (
  <a href="/">
    <img alt="logo" className="logo" src={logo}></img>
  </a>
);

export default Header = () => {
  let [isLogin, setIsLogIn] = useState(false);
  return (
    <>
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>

            {isLogin ? (
              <button onClick={() => setIsLogIn(false)}> Logout</button>
            ) : (
              <button onClick={() => setIsLogIn(true)}> Login</button>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
