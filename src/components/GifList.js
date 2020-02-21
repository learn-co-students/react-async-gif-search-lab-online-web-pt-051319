import React, { Component } from 'react'

export default class GifList extends Component {
  render() {
    return (
      <div>
        <ul>
        {this.props.data.map((url, i) => (<li><img src={url} key={i} alt="gif" /></li>))}
        </ul>
      </div>
    )
  }
}