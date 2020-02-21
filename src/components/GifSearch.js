import React from "react";

export default class GifSearch extends React.Component {
  state = {
    query: ""
  };

  handleChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchGIFs(this.state.query);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          name="query"
          value={this.state.query}
        />
        <button  style={{borderRadius: this.props.borderRadius}} type="submit">Search Gifs</button>
      </form>
    );
  }
}
