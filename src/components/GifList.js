import React, { Component } from "react";

export default class GifList extends Component {
  render() {
    return (
      <div id="Giflist">
        {this.props.data.map(url => (
          <div>
            <img src={url} alt="gif" />
          </div>
        ))}
      </div>
    );
  }
}
