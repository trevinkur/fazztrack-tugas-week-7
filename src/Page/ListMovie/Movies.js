import { useSelector, useDispatch } from "react-redux"
import { useGetScheduleQuery } from "../../Redux2/Schedule/scheduleSlice"
import Loading from "../Home/Loanding"
import { Link } from "react-router-dom"
import { useEffect } from "react"

function Movies() {

    const query = useSelector(state => state.scheduleQuery);
    // const {schedule, loading} = useSelector((state) => state.schedule)
    // const dispatch = useDispatch()
    // const query = {
    //     sortby: "schedule",
    //     order: "desc",
    //     limit: 5,
    //     page: 1
    //   }
    console.log(query, "movie")
      const { 
        data: schedule,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetScheduleQuery(query)

    let content;
    if(isLoading) {
        content = <Loading />
    } else if(isSuccess) {
       content = schedule.data.map((movie) => (          
        <div className="border movie-card text-center p-4 me-4 my-3"  key={movie.schedule_id}>
            <img src={"http://localhost:5000/static/" + movie.cover} className="mb-3 img-fluid" alt="movie" />
            <div className="">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text font-xs mb-4">{movie.categories}</p>
            
            <Link className="d-grid gap-2" to={"/movie-detail/" + movie.movie_id } key={movie.movie_id}>
            <a href="" className="btn btn-outline-primary ">Details</a>
            </Link>

            </div>
        </div>    
        ))
    } else if(isError) {
        content = <div>{error.toString()}</div>
    }
    // useEffect(()=> {
    //     dispatch(fetchSchedule(query))
    // }, [])

    return(<div className="container d-flex flex-wrap mb-3 bg-white justify-content-center">
        {content}
        {/* { loading ? <Loading /> : schedule.data ? schedule.data.map((movie) => {
            return(          
                <div className="border movie-card text-center p-4 me-4 my-3"  key={movie.schedule_id}>
                    <img src={"http://localhost:5000/static/" + movie.cover} className="mb-3 img-fluid" alt="movie" />
                    <div className="">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text font-xs mb-4">{movie.categories}</p>
                    
                    <Link className="d-grid gap-2" to={"/movie-detail/" + movie.movie_id } key={movie.movie_id}>
                    <a href="" className="btn btn-outline-primary ">Details</a>
                    </Link>
    
                    </div>
                </div>    
         )
        }): null}    */}
    </div>)
}

export default Movies