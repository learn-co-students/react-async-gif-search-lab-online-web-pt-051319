import React from 'react'

export default class GifSearch extends React.Component {
  state = {
    input: ' '
  }

  handleChange = event => {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    this.props.fetchGIFs(this.state.input)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="search" onChange={this.handleChange}/>
        <button type="submit">Search Gifs</button>
      </form>
    )
  }

}