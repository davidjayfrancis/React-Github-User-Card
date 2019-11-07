import React from "react";
import logo from "./logo.svg";
import Header from "./components/Header.js";
import { data } from "./components/data.js";
import UserCard from "./components/UserCard.js";
import Form from "./components/Form.js";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "davidjayfrancis",
      name: "",
      location: "",
      avatar: "",
      followers: []
    };
  }

  componentDidMount() {
    const getUser = async () => {
      try {
        const res = await axios.get(`
          https://api.github.com/users/${this.state.query}`);
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
          `https://api.github.com/users/${this.state.query}/followers`
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

  componentDidUpdate(prevProps, prevState) {
    const getUser = async () => {
      try {
        const res = await axios.get(`
          https://api.github.com/users/${this.state.query}`);
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
          `https://api.github.com/users/${this.state.query}/followers`
        );
        console.log(res.data);
        this.setState({
          followers: res.data
        });
      } catch (error) {
        console.log(error);
      }
    };
    if (this.state.query !== prevState.query) {
      getUser();
      getFollowers();
    }
  }

  searchUser = search => {
    this.setState({
      query: search
    });
    console.log("Submitted! ", this.state.query);
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        <Form searchUser={this.searchUser} />
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
