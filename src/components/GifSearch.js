import React, { Component } from 'react'

export default class GifSearch extends Component {
  render() {
    return (
      <div id="GifSearch" className="form-group">
        <form onSubmit={this.props.handleSubmit}>
            <h4>Enter Search Term:</h4>
            <input type="text" onChange={this.props.handleChange} value={this.props.query} />
            <br /><button type="submit" className="btn btn-success">Find Gifs</button>
        </form>
      </div>
      );
    }
}