// import { Outlet } from "react-router-dom";
import { Component } from "react";
import Profile from "./Profile";
// import ProfileClass from "./ProfileClass";
// export default About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <Profile name={"Veeresh Function"} />
//       <ProfileClass name={"Veeresh Class"} />
//     </div>
//   );
// };

export default class About extends Component {
  constructor(props) {
    console.log("parent class constructor");
    super(props);
  }
  componentDidMount() {
    console.log("parent class componentDidMount");
  }
  render() {
    console.log("parent class render");
    return (
      <div>
        <h1>About Us</h1>
        <Profile name={"Veeresh Function"} />
        {/* <ProfileClass name={"Veeresh Class"} />
        <ProfileClass name={"Veeresh Second Child Class"} /> */}
      </div>
    );
  }
}
