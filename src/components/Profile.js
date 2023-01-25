import { useEffect, useState } from "react";

export default Profile = (props) => {
  const [user, setUser] = useState(null);
  // useEffect(() => {
  //   getProfileDetails();
  // }, []);

  // async function getProfileDetails() {
  //   let user = await window.fetch("https://api.github.com/users/veeresh-dg");
  //   user = await user.json();
  //   setUser(user);
  // }

  // if (!user) return <Shimmer />;
  return (
    <div className="profile">
      <h2>{props?.name} profile</h2>
      <img src={user?.avatar_url}></img>
    </div>
  );
};
