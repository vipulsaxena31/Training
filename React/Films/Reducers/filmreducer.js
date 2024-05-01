const initialState = {
  films: [],
  loading: false,
  error: null,
};

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_FILMS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "FETCH_FILMS_SUCCESS":
      return {
        ...state,
        loading: false,
        films: action.payload,
      };

    case "FETCH_FILMS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default filmsReducer;
