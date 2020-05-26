import React from "react";

export class Card extends React.Component{

    render() {
        const imgStyle = {
            width: '300px',
            height:'300px',
        };

        const divStyle={
            width: '300px'
        }
        return (
            <div className="card" style={divStyle}>
                <img className="card-img-top" src={this.props.image} style={imgStyle} alt={""}/>
                    <div className="card-body">
                        <h3 className="card-title">{this.props.title_key}</h3>
                    </div>
            </div>
        );
    }
}

export default Card;