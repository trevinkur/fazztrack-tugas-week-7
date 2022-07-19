import axios from "axios"
import React, {useState, useEffect} from "react"
import moment from "moment"
import { useSelector, useDispatch } from "react-redux"
import { fetchMovie } from "../../Redux2/Movie/movieSlice"
import { useGetMovieIdQuery } from "../../Redux2/Movie/movieSlice"


function Movie(props) {
    const id = props.id
    // const {movie, loading, error} = useSelector((state => state.movie))
    // const dispatch = useDispatch()
    
    const { 
        data: movie,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetMovieIdQuery(id)

    // useEffect(()=> {
    //     dispatch(fetchMovie(id))
    // }, [])

    let content;

    if(isLoading) {
        content = <Loading />
    } else if(isSuccess) {
       content = movie.data.map((item) => <MovieDetail movie={item} />)
    } else if(isError) {
        content = <div>{error.toString()}</div>
    }

    // const [showMovie, setShowMovie] = useState({
    //     loading: false,
    //     result: {
    //         data: []
    //     }
    // })

    // useEffect(()=> {
    //     setShowMovie((prevState) => {
    //         return{...prevState, loading: true}
    //     })
    //     axios({
    //         method: "GET",
    //         url: `http://localhost:5000/api/v1/movies/${id}`
    //     }).then((res) => setShowMovie({
    //         loading: false,
    //         result: res.data
    //     })
    //     ).catch()
    // }, [])
    
    // console.log(showMovie.result.data[0])

//    return( 
//       loading ?  <Loading /> : movie.data ? movie.data.map((item) => <MovieDetail movie={item} />) : null  
//    )
    return content    
   
}

function MovieDetail(props) {
    const movie = props.movie
    return(
        <header>
        <div className="row my-5">
            <div className="col-lg-4 movie-container-detail">
                <div className="container movie-container border border-gray p-4">
                    <img className="mx-auto d-block" src={"http://localhost:5000/static/" + movie.cover} alt="movie" />
                </div>
            </div>
            <div className="col-lg movie-container-desc m-3">
                <div className="row">
                    <div className="container movie-title d-flex flex-column p-2">
                        <h4 className="font-d-l bold">{movie.title}</h4>
                        <p className="font-m">{movie.categories}</p>
                    </div>
                </div>
                <div className="row my-4 border-bottom border-gray my-3">
                    <div className="col">
                        <div className="container d-flex flex-column mb-3">
                            <p className="font-xs">Release Date</p>
                            <p className="font-d-xs bold">{moment(movie.release_date).format("MMMM DD YYYY")} </p>
                        </div>
                        <div className="container d-flex flex-column mb-3">
                            <p className="font-xs">Duration</p>
                            <p className="font-d-xs bold">{movie.duration} </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="container d-flex flex-column mb-3">
                            <p className="font-xs">Directed By</p>
                            <p className="font-d-xs bold">{movie.director} </p>
                        </div>
                        <div className="container d-flex flex-column mb-3">
                            <p className="font-xs">Cast</p>
                            <p className="font-d-xs bold">{movie.cast}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="container p-4">
                        <h3 font-d-s>Synopsis</h3>
                        <p className="font-s">{movie.description}</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}


function Loading() {
    return <h1 className="font-d-s">loading...</h1>
}
export default Movie

