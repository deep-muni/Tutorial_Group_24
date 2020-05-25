import React, { Component } from 'react';
import ResultBox from './ResultBox';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marvelMovieList: [{ "id": 1, "name": "Ant-Man" }, { "id": 2, "name": "Ant-Man and the Wasp" }, { "id": 3, "name": "Avengers: Age of Ultron" }, { "id": 4, "name": "Avengers: Endgame" }, { "id": 5, "name": "Avengers: Infinity War" }, { "id": 6, "name": "Black Panther" }, { "id": 7, "name": "Black Widow" }, { "id": 8, "name": "Blade" }, { "id": 9, "name": "Blade II" }, { "id": 10, "name": "Blade: Trinity" }, { "id": 11, "name": "Captain America" }, { "id": 12, "name": "Captain America" }, { "id": 13, "name": "Captain America: Civil War" }, { "id": 14, "name": "Captain America: The First Avenger" }, { "id": 15, "name": "Captain America: The Winter Soldier" }, { "id": 16, "name": "Captain Marvel" }, { "id": 17, "name": "Daredevil" }, { "id": 18, "name": "Dark Phoenix" }, { "id": 19, "name": "Deadpool" }, { "id": 20, "name": "Deadpool 2" }, { "id": 21, "name": "Doctor Strange" }, { "id": 22, "name": "Elektra" }, { "id": 23, "name": "Fantastic Four" }, { "id": 24, "name": "Fantastic Four" }, { "id": 25, "name": "Fantastic Four: Rise of the Silver Surfer" }, { "id": 26, "name": "Ghost Rider" }, { "id": 27, "name": "Ghost Rider: Spirit of Vengeance" }, { "id": 28, "name": "Guardians of the Galaxy" }, { "id": 29, "name": "Guardians of the Galaxy Vol. 2" }, { "id": 30, "name": "Howard the Duck" }, { "id": 31, "name": "Hulk" }, { "id": 32, "name": "Iron Man" }, { "id": 33, "name": "Iron Man 2" }, { "id": 34, "name": "Iron Man 3" }, { "id": 35, "name": "Logan" }, { "id": 36, "name": "Morbius" }, { "id": 37, "name": "Punisher: War Zone" }, { "id": 38, "name": "Shang-Chi and the Legend of the Ten Rings" }, { "id": 39, "name": "Spider-Man" }, { "id": 40, "name": "Spider-Man 2" }, { "id": 41, "name": "Spider-Man 3" }, { "id": 42, "name": "Spider-Man: Far From Home" }, { "id": 43, "name": "The Amazing Spider-Man" }, { "id": 44, "name": "The Amazing Spider-Man 2" }, { "id": 45, "name": "The Avengers" }, { "id": 46, "name": "The Eternals" }, { "id": 47, "name": "The Fantastic Four" }, { "id": 48, "name": "The Incredible Hulk" }, { "id": 49, "name": "The New Mutants" }, { "id": 50, "name": "The Punisher" }, { "id": 51, "name": "The Punisher" }, { "id": 52, "name": "The Wolverine" }, { "id": 53, "name": "Thor" }, { "id": 54, "name": "Thor: Ragnarok" }, { "id": 55, "name": "Thor: The Dark World" }, { "id": 56, "name": "Venom" }, { "id": 57, "name": "Venom: Let There Be Carnage" }, { "id": 58, "name": "X-Men" }, { "id": 59, "name": "X-Men Origins: Wolverine" }, { "id": 60, "name": "X-Men: Apocalypse" }, { "id": 61, "name": "X-Men: Days of Future Past" }, { "id": 62, "name": "X-Men: First Class" }, { "id": 63, "name": "X-Men: The Last Stand" }, { "id": 64, "name": "X2" }],
            list: []
        }
        this.change = this.change.bind(this);
    }

    onSelectDrpDwnItem = (drpDwnVal) => {
        this.setState({
            selectedValue: drpDwnVal.text,
            list: []
        });
    }

    render() {
        return (
            <main role="main" className="container mt-5">
                <span style={{ textAlign: "center" }}><h2>Search for Marvel movies.</h2></span>
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
                            <ResultBox key={row.id} text={row.name} onSelectDrpDwnItem={this.onSelectDrpDwnItem} />
                        ))}
                    </div>

                </div>
            </main>
        );
    }
    change(evt) {
        // console.log(evt.target.value);
        const searchString = evt.target.value
        const searchList = []
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
