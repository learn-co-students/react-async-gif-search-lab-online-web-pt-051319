import React from 'react'

export default class GifList extends React.Component {

  render() {
    let num = 1
    return (
      <div>
        {this.props.gifs.map(g => <div key={num++}><img alt="gif" src={g.url}/></div>)}
      </div>
    )
  }
}