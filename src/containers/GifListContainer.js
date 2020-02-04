import React from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  componentDidMount() {
    this.fetchGIFs()
  }

  fetchGIFs = (query = "dolphins") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=BfVNE1ZBTt9MdYBpD3tfkoyHd6c9mVuC&rating=g&limit=3`)
      .then(response => response.json())
      .then(({data}) => {
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
      })
  }

  render() {
    return (
      <div>
        <GifSearch fetchGIFs={this.fetchGIFs}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }

}
