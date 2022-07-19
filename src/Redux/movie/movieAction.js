import { FETCH_MOVIES_FAILURE, FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS } from "./movieType";
import axios from "axios"
// import thunk from "react-thunk"

function fetchMovieRequest() {
    return {
        type: FETCH_MOVIES_REQUEST
    }
}

function fetchMovieSucces(movie) {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: movie
    }
}

function fetchMovieFailure(error) {
    return {
        type: FETCH_MOVIES_FAILURE,
        payload: error
    }
}

export function fetchMovie() {
    
    return (dispatch) => {
        dispatch(fetchMovieRequest)
        axios({
            mothed: "GET",
            url: `http://localhost:5000/api/v1/movies?title=${""}&limit=${5}&page=${1}`
        })
        .then((res) => {
            const movie = res.data;
            dispatch(fetchMovieSucces(movie))
        } )
        .catch((err) => {
            const error = err.response
            dispatch(fetchMovieFailure(error))
        } )
    }
}

// export default fetchMovie