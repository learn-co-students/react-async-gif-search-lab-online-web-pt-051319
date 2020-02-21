import React from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

class GifListContainer extends React.Component {
  state = {
    gifs: []
  };

  componentDidMount() {
    this.fetchGIFs;
  }

  fetchGIFs = query => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          gifs: data.data.map(g => ({
            url: g.images.original.url
          }))
        })
      );
  };

  render() {
    return (
      <div>
        <GifSearch fetchGIFs={this.fetchGIFs} borderRadius="25px" />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
