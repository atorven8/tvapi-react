import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BASE_URL } from "../api";
import Form from "../Form";
import Movies from "./Movies";
import Movie from "./Movie";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${BASE_URL}/shows`);
      setMovies(res.data);
    };
    fetchData();
  }, []);

  const getMovie = async id => {
    const res = await axios.get(`${BASE_URL}/shows/${id}`);
    setMovie(res.data);
  };

  console.log(movie);
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path="/" render={props => <Movies movies={movies} />} />
          <Route
            path="/shows/:id"
            render={props => (
              <Movie {...props} getMovie={getMovie} movie={movie} />
              
              
            )}
          />
          <Route exact path="/form" component={Form} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
