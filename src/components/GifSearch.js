import React, { Component } from "react";

export default class GifSearch extends Component {
  render() {
    return (
      <div id="GifSearch" class="form-group">
        <form onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            onChange={this.props.handleChange}
            value={this.props.query}
          />
          <input type="submit" class="btn btn-default" />
        </form>
      </div>
    );
  }
}
