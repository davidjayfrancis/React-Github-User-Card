import React from "react";
import logo from "./logo.svg";
import Header from "./components/Header.js";
import { data } from "./components/data.js";
import UserCard from "./components/UserCard.js";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      avatar: "",
      followers: []
    };
  }

  componentDidMount() {
    const getUser = async () => {
      try {
        const res = await axios.get(
          "https://api.github.com/users/davidjayfrancis"
        );
        console.log(res.data);
        this.setState({
          name: res.data.name,
          location: res.data.location,
          avatar: res.data.avatar_url
        });
      } catch (error) {
        console.log(error);
      }
    };

    const getFollowers = async () => {
      try {
        const res = await axios.get(
          "https://api.github.com/users/davidjayfrancis/followers"
        );
        console.log(res.data);
        this.setState({
          followers: res.data
        });
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
    getFollowers();
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        <UserCard
          name={this.state.name}
          location={this.state.location}
          avatar_url={this.state.avatar}
          followers={this.state.followers}
        />
      </div>
    );
  }
}

export default App;
