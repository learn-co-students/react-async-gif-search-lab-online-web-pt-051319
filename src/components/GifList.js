import React from "react";

function GifList(props) {
  let gifArray = props.gifs.map((gif) => (
    <li value={gif.key}>
      <img src={gif.images.original.url} />
    </li>
  ));
  console.log(gifArray);
  return <ul>{gifArray}</ul>;
}

export default GifList;
