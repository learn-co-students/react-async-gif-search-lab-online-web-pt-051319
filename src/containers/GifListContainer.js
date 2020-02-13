import React, { Component } from "react";
import GifList from "../components/GifList";

class GifListContainer extends Component {
  state = {
    searchTerm: "",
    gifs: []
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const searchTerm = this.state.searchTerm;
    const fetchURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      searchTerm +
      "&api_key=R7g7QVPin0wn7HiZkwbHq6tmFlPFj7mq&rating=g&limit=3";
    fetch(fetchURL)
      .then(resp => resp.json())
      .then(({ data }) => {
        {
          const gifs = data.map(gif => gif.images.original.url);
          this.setState({ gifs });
        }
      });
  };

  //   renderGifs() {
  //     return this.state.gifs.map(url => {
  //       return <GifList url={url} />;
  //     });
  //   }

  handleOnChange = e => {
    const newState = {
      searchTerm: e.target.value
    };
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            name="searchTerm"
            value={this.state.searchTerm}
            onChange={this.handleOnChange}
          />
          <button>Search</button>
        </form>
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;

//event on the submit button is going to trigger API call

//onChange event listener is going to update local state

//create a function that gets triggered with an argumetn with the search term. That function then holds the fetch call and gives us back the URL.
//I want to hav ea function that triggers a fetch call bc to that function want to pass the search query.
