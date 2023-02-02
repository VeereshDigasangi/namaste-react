import logo from "../../assets/img/food-villa.png";
import { Link } from "react-router-dom";
import Login from "./Login";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const Title = () => (
  <a href="/">
    <img alt="logo" className="h-28 p-2" src={logo}></img>
  </a>
);

export default Header = () => {
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="flex justify-between bg-pink-50 shadow-lg sm: bg-blue-50 md: bg-yellow-50 ">
        <Title />
        <h1 className="px-2 py-12 font-bold text-xl">
          <i>Food Villa</i>
        </h1>
        <div>
          <ul className="flex py-10">
            <li className="px-2">
              <Link to="/">Home</Link>
            </li>
            <li className="px-2">
              <Link to="/about">About</Link>
            </li>
            <li className="px-2">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-2">
              <Link to="/cart">Cart</Link>
            </li>
            <li className="px-2">
              <Link to="/instamart">Instamart</Link>
            </li>
            {!user.name ? (
              <li className="px-2">
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
            ) : (
              <h2 className="m-2 p-10 font-bold text-xl">Hi {user.name}</h2>
            )}
            {isOnline}
            <h1>{isOnline ? "✅" : "🔴"}</h1>
          </ul>
        </div>
      </div>
    </>
  );
};
