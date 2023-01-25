import { Component } from "react";

export default class ProfileClass extends Component {
  constructor(props) {
    console.log("child class constructor");
    super(props);
    this.state = {
      user: {
        name: props.name,
      },
    };
  }

  async componentDidMount() {
    console.log("child class componentDidMount");
    let user = await window.fetch("https://api.github.com/users/veeresh-dg");
    user = await user.json();
    this.setState({ user: user });
  }

  // componentDidMount(){
  //   console.log("child class componentDidMount");
  //   this.setState({user:})
  // }

  render() {
    console.log("child class render");
    return (
      <div className="profile">
        <h2>Profile: {this.state?.user?.name}</h2>
        <img src={this.state?.user?.avatar_url}></img>
      </div>
    );
  }
}
