import React, {Component} from "react";
import Axios from "axios";
import './Movie.css';

class Movie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movie: []
        }
    }

    async componentDidMount(){
        const id = this.props.location.state.id;
        const url = "https://api-tutorial4.herokuapp.com/movies?show_id=" + id;
        const data = await Axios.get(url);
        this.setState({
            movie: data.data[0]
        });
    }

    render() {
        return (
            <div>
                <div onClick={() => this.props.history.push('/') } className="back"/>
                <div className="spec-movie">
                    <h1>Selected Movie ID {this.props.location.state.id}</h1>
                    <span>Movie Name:</span>
                    <p>{this.state.movie.title}</p>
                    <span>Movie Description:</span>
                    <p>{this.state.movie.description}</p>
                    <span>Release Year:</span>
                    <p>{this.state.movie.release_year}</p>
                    <span>Duration:</span>
                    <p>{this.state.movie.duration}</p>
                    <span>Cast:</span>
                    <p>{this.state.movie.cast}</p>
                </div>
            </div>
        );
    }
}

export default Movie;
