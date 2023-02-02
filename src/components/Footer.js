import { useContext } from "react";
import UserContext from "../utils/UserContext";

export default Footer = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1 className="text-3xl">Footer</h1>
      <h1>
        This app is developed by <span className="font-bold">{user.name}</span>
      </h1>
    </div>
  );
};
