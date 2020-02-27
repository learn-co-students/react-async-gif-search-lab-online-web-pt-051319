import React from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

class GifListContainer extends React.Component {
  state = {
    gifs: []
  };

  fetchGifs = event => {
    event.preventDefault();
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${event.target.name.value}&api_key=r6VJvK49yJefnXKxpq7KGdT0U5tWW8EC`
    )
      .then(res => res.json())
      .then(json =>
        this.setState({
          gifs: json.data.slice(0, 3)
        })
      );
  };

  render() {
    return (
      <div>
        {console.log(this.state.gifs)}
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;

// GifList
