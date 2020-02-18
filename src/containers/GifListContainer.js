import React, { Component } from "react"
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default class GifListContainer extends Component {
    state = {
        gifs: {}
    }

    handleSubmit = (searchTerm) => {
        this.fetchGifs(searchTerm)
    }
    
    componentDidMount() {
        this.fetchGifs()
    }

    fetchGifs(term = "hello") {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${term}&api_key=H1hio7hnI8sxRWtXPiD3oqjyIE7w6sIC&rating=g`)
            .then(resp => resp.json())
            .then((data) => {
                this.setState(
                    {gifs: data.data.slice(0, 3).map(gif => gif.images.original.url)});
        })
    }

    render() {
        return (
            <div>
                <GifSearch handleSubmit={this.handleSubmit}/>
                <GifList gifs={this.state.gifs} />
            </div>
        );
    }
}