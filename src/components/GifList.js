import React from "react";

const GifList = ({ gifs }) => {
  gifs;
  return (
    <div>
      {gifs.map(gif => (
        <img key={gif} src={gif} />
      ))}
    </div>
  );
};

export default GifList;
