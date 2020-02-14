import React from 'react';

const GifSearch = (props) => {

	const handleSubmit = (event) => {
		event.preventDefault()
		props.handleSubmit(new FormData(event.target))
	}

	return (
		<React.Fragment>
			<form onSubmit={handleSubmit}>
				<input type="text" name="query" id="query" placeholder="What do you want to search for?" />
				<button type="submit">Search!</button>
			</form>
		</React.Fragment>
	)
}

export default GifSearch
