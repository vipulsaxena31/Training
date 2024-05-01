import axios from "axios";

export const fetchFilmsRequest = () => ({
  type: "FETCH_FILMS_REQUEST",
});

export const fetchFilmsSuccess = (films) => ({
  type: "FETCH_FILMS_SUCCESS",
  payload: films,
});

export const fetchFilmsFailure = (error) => ({
  type: "FETCH_FILMS_FAILURE",
  payload: error,
});

export const fetchFilms = () => {
  return (dispact) => {
    dispact(fetchFilmsRequest());
    axios
      .get("https://swapi.dev/api/films")
      .then((response) => {
        dispact(fetchFilmsSuccess(response.data.results));
      })
      .catch((error) => {
        dispact(fetchFilmsFailure(error.message));
      });
  };
};
