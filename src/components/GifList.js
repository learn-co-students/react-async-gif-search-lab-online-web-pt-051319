import React from 'react';

const GifList = (props) => {
	return (
		<React.Fragment>
			{props.gifs.map(url => <img src={url} />)}
		</React.Fragment>
	)
}

export default GifList
