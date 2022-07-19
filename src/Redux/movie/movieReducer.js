const initialState = {
    loading: false,
    movie: {
        data:[],
        message: "",
        status: 0,
        totalPage: 0,
        totalRow: 0
    }
}

export const movieReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_MOVIES_REQUEST": 
            return {
                ...state,
                loading: true
            }
        case "FETCH_MOVIES_SUCCESS":
            return {
                ...state,
                movie: action.payload,

            }
        case "FETCH_MOVIES_FAILURE":
            return {
                ...state,
                error: action.payload
            }
        default: return state
    }
}