  
import uuid from "uuid";
import { ADD_MOVIE,REM_MOVIE, EDIT_MOVIE, GET_TITLE ,GET_RATING } from "./types";



export const addMovie = newMovie => {
  return {
    type: ADD_MOVIE,
    payload: newMovie
  };
};
export const removmovie = id => {
  return {
    type: REM_MOVIE,
    payload: id
  };
};
export const editMovie = movie => {
  return {
    type: EDIT_MOVIE,
    payload: movie
  };
};
export const getRating = rating => {
  return {
    type: GET_RATING,
    payload: rating
  };
};
export const getTitle = name => {
  return {
    type: GET_TITLE,
    payload: name
  };
};




