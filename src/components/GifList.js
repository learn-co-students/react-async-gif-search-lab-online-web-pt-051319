import React, { Component } from "react";

export default class GifList extends Component {

    render() {
        let listGifs = () => this.props.gifs.map( (gif, index) => <li key={index}><img src={gif} alt="gif" /></li>)
        return (
            <div>
                <ul>
                    {this.props.gifs.length > 0 ? listGifs() : null}
                </ul>
            </div>
        );
    }

}
