import React, { Component } from "react"

export default class GifSearch extends Component {

    state = {
        search: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state.search)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="search" id="search" value={this.state.search} className="input" />
                    <button type="submit" className="btn">Search</button>
                </form>
            </div>
        )
    }
}