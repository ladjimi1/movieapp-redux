import {ADD_MOVIE, REM_MOVIE, EDIT_MOVIE ,GET_RATING,GET_TITLE} from "../actions/types";

import uuid from "uuid";

const initialState=[
    {
        id:uuid(),
        image: 'https://images-na.ssl-images-amazon.com/images/I/91kXw97IUBL._AC_SY445_.jpg',
        title: 'Lion King',
        rating: 4,
        year: 2019
    },
    {
        id:uuid(),
        image: 'https://img.akoam.net/files/1567260389.jpg',
        title: 'Avatar',
        rating: 3,
        year : 2009,
    },
    {
        id:uuid(),
        image: 'https://w.cima4up.co/wp-content/uploads/2016/08/Troy-2004.jpg',
        title: 'Troy',
        rating: 5,
        year : 2004,
    },
];
const moviReducers=(state={movies:initialState,keyword:"",rating:"1"},action)=>{
    
    switch (action.type) {

    case ADD_MOVIE:
        return {...state,movies:state.movies.concat(action.payload)};
    case REM_MOVIE:
        return{...state, movies: state.movies.filter(el=> el.title!==action.payload)}
    case EDIT_MOVIE:
        return {...state, movies : state.movies.map(el=>el.title===action.payload.title? action.payload:el)};
    case GET_RATING:
        return {...state,rating:action.payload};   
    case GET_TITLE:
        return {...state, keyword: action.payload}; 


        
        
        default:
         
           return state;
         } 
}
          

export default moviReducers;