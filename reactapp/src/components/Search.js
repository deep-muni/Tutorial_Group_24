import React, {Component} from "react";
import "./Search.css";
import Suggestions from "./Suggestions";
import Card from "./Card";
import Axios from "axios";

let userInput = {};

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AllMovies: [],
            MovieList: [],
            selectedTup: [],
            userI: "",
        };

        this.suggest = this.suggest.bind(this);
        this.showSuggestions = this.showSuggestions.bind(this);
        this.sugClick = this.sugClick.bind(this);
        this.showCard = this.showCard.bind(this);
    }

    async componentDidMount(){
        const {data : AllMovies} = await Axios.get("https://api-tutorial4.herokuapp.com/movies?");
        this.setState({AllMovies});
    }

    async getData(url) {
        const {data: MovieList} = await Axios.get(url);
        this.setState({MovieList});
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
            this.getData(
                "https://api-tutorial4.herokuapp.com/movies?title_like=.*" + userInp
            );
            userInput = {
                borderRadius: "5px 5px 0 0",
                boxShadow: "inset 0 0 10px 4px darkcyan",
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
                <div className="card-wrapper">
                    {this.state.selectedTup.map((tup, index) => {
                        return <Card key={index} show_id={tup.show_id} title={tup.title}/>;
                    })}
                </div>
            );
        } else {
            return null;
        }
    }

    initialShow() {
        if(this.state.selectedTup.length === 0 || this.state.userI.length === 0){
            return (
                <div className="card-wrapper">
                    {this.state.AllMovies.map((tup, index) => {
                        return <Card key={index} show_id={tup.show_id} title={tup.title}/>;
                    })}
                </div>
            );
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="searchBox">
                    <p className="header">Movies</p>
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
                {this.initialShow()}
                {this.showCard()}
            </div>
        );
    }


}

export default Search;
