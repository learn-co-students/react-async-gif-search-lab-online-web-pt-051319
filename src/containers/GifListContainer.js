import React, { Component } from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

export default class GifListContainer extends Component {
  state = {
    query: "",
    data: []
  };

  // componentDidMount() {
  //   console.log(this);
  //   fetch(
  //     "https://api.giphy.com/v1/gifs/search?q=" +
  //       "puppy" +
  //       "&api_key=lc2mWbVuXzXeNLIFzTgTSoxqSXLnthRm&rating=g"
  //   )
  //     .then(res => res.json())
  //     .then(json => {
  //       let gifs = json.data.slice(0, 3).map(gif => gif.images.original.url);
  //       this.setState({ data: gifs });
  //     });
  // }

  handleChange = e => {
    e.persist();
    this.setState({
      query: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch(
      "https://api.giphy.com/v1/gifs/search?q=" +
        this.state.query +
        "&api_key=lc2mWbVuXzXeNLIFzTgTSoxqSXLnthRm&rating=g"
    )
      .then(res => res.json())
      .then(json => {
        let gifs = json.data.slice(0, 3).map(gif => gif.images.original.url);
        this.setState({ data: gifs });
      });
  };

  render() {
    return (
      <div>
        <GifSearch
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          query={this.state.query}
        />
        <GifList data={this.state.data} />
      </div>
    );
  }
}
