
import Loading from "../Home/Loanding";
import { useDispatch, useSelector } from "react-redux";
import { useGetScheduleByMovieIdQuery } from "../../Redux2/Schedule/scheduleSlice";
import { useEffect } from "react";

function Movie(props) {
    const { query} = props
    // const {schedule, loading} = useSelector((state) => state.schedule)
    // const dispatch = useDispatch()
    
    
    // useEffect(()=> {
    //     dispatch(fetchSchedule(query))
    // }, [])


    // return(<>
    //     {loading ? < Loading/> : schedule.data ? schedule.data.map((item) => <Render item={item} />) : null}
    // </>)
    const { 
        data: schedule,
        isLoading,
        isSuccess,
        isError,
        error
    }= useGetScheduleByMovieIdQuery(query)
    
    let content;

    if(isLoading) {
        content = <Loading />
    } else if(isSuccess) {
       content = schedule.data.map((item) => <Render item={item} />)
    } else if(isError) {
        content = <div>{error.toString()}</div>
    }

    return content
}
    
function Render(props) {
    const item = props.item
    return(<><h3 class="movie-selected font-d-m bold mb-3">Movie Selected</h3>
    <div class="container movie-title d-flex justify-content-between bg-white p-4 mb-3">
        <h3>{item.title}</h3>
        <button class="btn btn-outline-primary">Change Movie</button>
    </div></>)
}

export default Movie