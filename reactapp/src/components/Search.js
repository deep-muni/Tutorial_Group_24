import React, { Component } from 'react';
import ResultBox from './ResultBox';
import Card from './Card';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marvelMovieList: [
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
            ],
            list: [],
            movie: "",
            image: "",
            showing:false
        }
        this.change = this.change.bind(this);
    }

     onClickDrpDwnItem(movie,image) {
        this.setState({movie: movie, image:image ,showing:true,list: []});
        document.getElementById("searchBox").value = movie;
    }

    render() {
        var showing = this.state.showing;
        return (
            <main role="main" className="container mt-5">
                {/*<span style={{ textAlign: "center" }}><h2>Search for Marvel movies.</h2></span>*/}
                <div className="my-3 p-3 bg-light rounded box-shadow">
                    <div className="media form-group pt-3">
                        <input text="search"
                            className="form-control input-lg media-body"
                            id="searchBox"
                            onChange={this.change}
                            value={this.state.selectedValue}
                        />
                    </div>
                    <div className='continer' id='searchResults'>
                        {this.state.list.map((row) => (
                            <ResultBox key={row.id} text={row.name}  image={row.Poster} clickHandler={this.onClickDrpDwnItem.bind(this)}/>
                        ))}
                    </div>
                </div>
                    {
                        showing?
                            <div id={"moviecard"}>
                                <Card title_key={this.state.movie} image={this.state.image} />
                            </div>
                            :null
                    }
            </main>
        );
    }
    change(evt) {
        // console.log(evt.target.value);
        const searchString = evt.target.value
        const searchList = []

        if (searchString.length === 0) {
            this.setState({movie: "", image: "",showing:false})
        }
        //Search the movie
        this.state.marvelMovieList.map((row) => {
            if (row.name.toLowerCase().includes(searchString.toLowerCase()) && searchString !== ''
                && searchString !== '-') {
                if (searchList.length <= 10)
                    searchList.push(row)
            }
            return searchList;
        })
        this.setState({
            list: searchList
        })
    }
}

export default Search;
