import React from "react";

export default class GifList extends React.Component {
  render() {
    return (
      <div>
        {this.props.gifs.map(g => (
          <div>
            <img alt="gif" src={g.url} />
          </div>
        ))}
      </div>
    );
  }
}
