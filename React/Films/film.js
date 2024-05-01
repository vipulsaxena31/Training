import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchFilms } from "../actions/filmsActions";

const Films = ({ films, loading, error, fetchFilms }) => {
  useEffect(() => {
    fetchFilms();
  }, [fetchFilms]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Star Wars Films</h1>
      <ul>
        {films.map((film) => (
          <li key={film.episode_id}>
            <u>
              <b>{film.title}</b>
            </u>{" "}
            ({film.release_date}) - directed by <b>{film.director}</b> <br />
            {film.opening_crawl}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  films: state.films.films,
  loading: state.films.loading,
  error: state.films.error,
});

export default connect(mapStateToProps, { fetchFilms })(Films);
