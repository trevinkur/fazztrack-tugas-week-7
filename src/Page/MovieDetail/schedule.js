import axios from "axios"
import React, {useState, useEffect} from "react"
import Loading from "../Home/Loanding"
import {Link, useLocation, useSearchParams} from "react-router-dom"
import moment from "moment"
import { useDispatch, useSelector } from "react-redux"
import {  useGetScheduleByMovieIdQuery } from "../../Redux2/Schedule/scheduleSlice"

function Schedule(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const search = useLocation().search;
    const location = useLocation()
   
     const [params, setParams] = useState({
        schedule: "",
        place: "",
     }) 
     const scheduleQuery =  new URLSearchParams(search).get("schedule");
     const placeQuery = new URLSearchParams(search).get("place")
     
    //  console.log(search)
    //  console.log(location)
    

    const { id } = props
    // const {schedule, loading, error} = useSelector((state) => state.schedule)
    const dispatch = useDispatch()
    const [query, setQuery] = useState({
        id: id,
        schedule: "",
        place: "",
        limit: 5,
        page: 1
    })
    
    useEffect(() => {
        setSearchParams({
            schedule: params.schedule,
            place: params.place
         });
    }, [params])
   
    useEffect(() => {

        // location.searchParams.set("schedule", query.schedule);
        // location.searchParams.set()
        // params.append("schedule", query.schedule );
        // params.append("place", query.place)
        // if()
        // setSearchParams({...params, schedule: query.schedule})
        // setSearchParams({...params, place: query.place})
        setQuery((prevState) => ({...prevState,schedule: scheduleQuery}));
        setQuery((prevState) => ({...prevState,place: placeQuery}));
    },[query])

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
       content = schedule.data.map((item) => <ScheduleCard schedule={item} id={id}/>)
    } else if(isError) {
        content = <div>{error.toString()}</div>
    }

    // useEffect(()=> {
    //     dispatch(fetchSchedule(query))
    // }, [query])

    return(
        <section class="bg-lightgray p-4">
        <div class="row text-center mb-1 mt-5">
            <h4 class="font-d-m bold">Showtimes and Ticket</h4>
        </div>
        <div class="row justify-content-center mb-2 p-5">
            <div class="col-md-2">
                    <select className="form-select form-select-lg mb-3 align-self-center" aria-label=".form-select-lg example "
                        // onChange={(e) => setQuery((prevState) => { return {...prevState, schedule: e.target.value}})}
                        // onChange={(e) => setSearchParams((prevState) => ({...prevState,schedule: e.target.value}))}
                        // onChange={(e) => params.append("schedule", e.target.value)}
                        onChange={(e) => { setParams((prevState) => ({...prevState,schedule: e.target.value}))
                        }}
                        >
                        <option selected>Schedule</option>
                        <option value="2022-06-25">2022-06-25</option>
                        <option value="2022-06-30">2022-06-30</option>
                        <option value="2022-06-29">2022-06-29</option>
                    </select>
            </div>
            <div class="col-md-2">
                    <select className="form-select form-select-lg mb-3 align-self-center" aria-label=".form-select-lg example "
                        // onChange={(e) => setQuery((prevState) => { return {...prevState, place: e.target.value}})}
                        // onChange={(e) => params.append("place", e.target.value)}
                        onChange={(e) => {setParams((prevState) => ({...prevState,place: e.target.value}));
                        
                        }}
                        >
                        <option selected>place</option>
                        <option value="purwokerto">Purwokerto</option>
                        <option value="bekasi">Bekasi</option>
                    </select>
            </div>
        </div>
        <div class="row">
            <div class="container d-flex flex-wrap justify-content-center">
                {/* {loading ? <Loading/> : schedule.data ? schedule.data.map((item) => (
                    <ScheduleCard id={id} schedule={item} key="item.schedule_id"/>
                    )
                ): null} */}
                {content}
      
            </div>
        </div>
    </section>
    )
}

function ScheduleCard(props) {
    const {schedule, id} = props
    return(<div className="card m-3 ">
            <div className="row card-title py-4 px-4 border-bottom align-items-center">
                <div className="col logo  text-center">
                    <img src={"http://localhost:5000/static/" + schedule.cinema_logo} alt="logo" />
                </div>
                <div className="col">
                    <h3>{schedule.cinema_name}</h3>
                    <p className="font-xs">{schedule.address}</p>
                </div>
            </div>
            <div className="row card-body">
                <div className="container-fluid d-flex flex-wrap align-items-center mb-2 px-4">
                    <p className="font-xs me-3 mb-3 ">08:30AM</p>
                    <p className="font-xs me-3 mb-3">08:30AM</p>
                    <p className="font-xs me-3 mb-3">08:30AM</p>
                    <p className="font-xs me-3 mb-3">08:30AM</p>
                    <p className="font-xs me-3 mb-3">08:30AM</p>
                    <p className="font-xs me-3 mb-3">08:30AM</p>
                    <p className="font-xs me-3 mb-3">08:30AM</p>
                </div>
            </div>
            <div className="row price mb-4 px-4 justify-content-between">
                <div className="col-3">
                    <p className="font-s">Price</p>
                </div>
                <div className="col-6">
                    <p className="font-d-xs bold">$10.00/seat</p>
                </div>
            </div>
            
            <Link className="row mb-4 px-5" to={`/${id}/order/${schedule.schedule_id}?schedule=${moment(schedule.schedule).format("YYYY-MM-DD")}&place=${schedule.place}&cinema=${schedule.cinema_id}`}>
                <button className="btn btn-primary shadow p-3">Book Now</button>
            </Link>
    
    </div>)
}

export default Schedule