import React, { Component } from 'react';
import './Search.css';
import Suggestions from "./Suggestions";
import Card from "./Card";

let userInput = {}

class Search extends Component {

    constructor(props) {
        super(props);
        this.marvelMovieList= [
            {
                "id": 1,
                "name":"Iron Man",
                "Poster":"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"
            },
            {
                "id": 2,
                "name":"The Incredible Hulk",
                "Poster":"https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SX300.jpg"
            },
            {
                "id": 3,
                "name":"Iron Man 2",
                "Poster":"https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg"
            },
            {
                "id": 4,
                "name":"Thor",
                "Poster":"https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
            },
            {
                "id": 5,
                "name":"Captain America: The First Avenger",
                "Poster":"https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg"
            },
            {
                "id": 6,
                "name":"The Avengers",
                "Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
            },
            {
                "id": 7,
                "name":"Iron Man 3",
                "Poster":"https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg"
            },
            {
                "id": 8,
                "name":"Thor: The Dark World",
                "Poster":"https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SX300.jpg"
            },
            {
                "id": 9,
                "name":"Captain America: The Winter Soldier",
                "Poster":"https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_SX300.jpg"
            },
            {
                "id": 10,
                "name":"Guardians of the Galaxy",
                "Poster":"https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX300.jpg"
            },
            {
                "id": 11,
                "name":"Avengers: Age of Ultron",
                "Poster":"https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
            },
            {
                "id": 12,
                "name":"Ant-Man",
                "Poster":"https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg"
            },
            {
                "id": 13,
                "name":"Captain America: Civil War",
                "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            },
            {
                "id": 14,
                "name":"Doctor Strange",
                "Poster":"https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg"
            },
            {
                "id": 15,
                "name":"Guardians of the Galaxy Vol. 2",
                "Poster":"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
            },
            {
                "id": 16,
                "name":"Spider-Man: Homecoming",
                "Poster":"https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg"
            },
            {
                "id": 17,
                "name":"Thor: Ragnarok",
                "Poster":"https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg"
            },
            {
                "id": 18,
                "name":"Black Panther",
                "Poster":"https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg"
            },
            {
                "id": 19,
                "name":"Avengers: Infinity War",
                "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
                "id": 20,
                "name":"Ant-Man and the Wasp",
                "Poster":"https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
            },
            {
                "id": 21,
                "name":"Captain Marvel",
                "Poster":"https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg"
            },
            {
                "id": 22,
                "name":"Avengers: Endgame",
                "Poster":"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
            },
            {
                "id": 23,
                "name":"Spider-Man: Far from Home",
                "Poster":"https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
            }
        ];
        this.state = {
            suggestion: [],
            selectedTup: [],
            userI: ''
        }
        this.suggest = this.suggest.bind(this);
        this.showSuggestions = this.showSuggestions.bind(this);
        this.sugClick = this.sugClick.bind(this);
        this.showCard = this.showCard.bind(this);
    }

    suggest(e){
        const userInp = e.target.value;
        this.setState({
            userI: userInp
        })
        let sug = [];
        if(userInp.length > 0){
            sug = this.marvelMovieList.filter((tup) => {
                return tup.name.toLowerCase().includes(userInp.toLowerCase());
            });
        }

        if(sug.length > 0){
            userInput = {
                borderRadius : '5px 5px 0 0',
                borderBottomColor : '#8f8f8f',
                boxShadow: 'inset 0 0 10px 4px #8f8f8f'
            }
        }else{
            userInput = {}
        }
        this.setState({
            suggestion: sug
        })
    }

    showSuggestions(){
        if(this.state.suggestion.length === 0){
            return null;
        }
        return(
            <div className="listWrapper">
                {
                    this.state.suggestion.map((tup, index) => {
                        return <Suggestions onClick={this.sugClick} key={index} name={tup.name}/>
                    })
                }
            </div>
        );
    }

    sugClick(e){
        userInput = {}
        document.getElementById('userInput').value = e.target.innerText;

        const tup = this.marvelMovieList.filter((t) => {
            return t.name === e.target.innerText
        })

        this.setState({
            suggestion : [],
            selectedTup: tup
        })
    }

    showCard(){
        if(this.state.suggestion.length === 0 && this.state.userI.length > 0){
            return(
                <div>
                    {
                        this.state.selectedTup.map((tup, index) =>{
                            return <Card key={index} name={tup.name} image={tup.Poster} />
                        })
                    }
                </div>
            );
        }else{
            return null;
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="searchBox">
                    <h2>Marvel Movies</h2>
                    <input type="text" id="userInput" placeholder="Search" className="userInput" style={userInput}
                           onChange={this.suggest}/>
                    {this.showSuggestions()}
                </div>
                {this.showCard()}
            </div>
        );
    }
}

export default Search;
