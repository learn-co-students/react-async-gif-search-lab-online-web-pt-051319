import React from 'react';

const GifList = (props) => {
	return (
		<div className="row" >
			{props.gifs.map((url, i) => <img alt="gif from giphy" key={i} src={url} />)}
		</div>
	)
}

export default GifList