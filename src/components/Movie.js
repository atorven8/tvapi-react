import React, { useEffect } from "react";
import styled from "styled-components";

const Movie = ({ movie, getMovie, match }) => {
  useEffect(() => {
    getMovie(match.params.id);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    summary,
    image,
    rating,
    genres,
    language,
    rumtime,
    premiered
  } = movie;

  return (
    <div>
      <h1>{name}</h1>
      
      <div>{summary}</div>
      
      <p>{premiered}</p>
      
      <p>{language}</p>
    </div>
  );
};

export default Movie;
