import React, { Component } from "react";
import "./Search.css";
import Suggestions from "./Suggestions";
import Card from "./Card";
import Axios from "axios";

let userInput = {};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MovieList: [],
      selectedTup: [],
      userI: "",
    };
    this.suggest = this.suggest.bind(this);
    this.showSuggestions = this.showSuggestions.bind(this);
    this.sugClick = this.sugClick.bind(this);
    this.showCard = this.showCard.bind(this);
  }

  async dataRequest(url) {
    const { data: MovieList } = await Axios.get(url);
    this.setState({ MovieList });
  }

  suggest(e) {
    const userInp = e.target.value;
    this.setState({
      userI: userInp,
    });
    if (userInp.length > 0) {
      this.setState({
        selectedTup: [],
      });
      this.dataRequest(
        "https://api-tutorial4.herokuapp.com/movies?title_like=.*" + userInp
      );
      userInput = {
        borderRadius: "5px 5px 0 0",
        boxShadow: "inset 0 0 10px 4px #8f8f8f",
      };
    } else {
      this.setState({
        MovieList: [],
      });
      userInput = {};
    }
  }

  showSuggestions() {
    if (this.state.MovieList.length === 0) {
      return null;
    }
    return (
      <div className="listWrapper">
        {this.state.MovieList.map((tup, index) => {
          return (
            <Suggestions
              onClick={this.sugClick}
              key={index}
              title={tup.title}
            />
          );
        })}
      </div>
    );
  }

  sugClick(e) {
    userInput = {};
    document.getElementById("userInput").value = e.target.innerText;

    const tup = this.state.MovieList.filter((t) => {
      return t.title === e.target.innerText;
    });

    this.setState({
      MovieList: [],
      selectedTup: tup,
    });
  }

  showCard() {
    if (this.state.userI.length > 0 && this.state.selectedTup.length > 0) {
      return (
        <div>
          {this.state.selectedTup.map((tup, index) => {
            return <Card key={index} title={tup.title} />;
          })}
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="searchBox">
          <h2>Movies</h2>
          <input
            type="Search"
            id="userInput"
            placeholder="Search"
            className="userInput"
            style={userInput}
            onChange={this.suggest}
          />
          {this.showSuggestions()}
        </div>
        {this.showCard()}
      </div>
    );
  }
}

export default Search;
