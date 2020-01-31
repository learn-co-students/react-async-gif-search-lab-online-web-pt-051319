import React from 'react'
import Giflist from './components/Giflist'
import GifSearch from './components/GifSearch'

export default class GifListContainer extends React.Component {

    state = {

        gifs: []

    }

    render() {
        return ()
    }

    fetchGifs() {
        let url = "https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=dI2exWtfMaRWs9OfCnY80QQzThH1UYgi&rating=g"
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({

            })
        })
    }

    componentDidMount() {
        this.fetchGifs()
    }
}