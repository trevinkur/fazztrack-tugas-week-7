import React, { useEffect, useState } from "react"
import axios from "axios"
import Loading from "./Loanding"
import {Link} from "react-router-dom"
import { fetchMovie } from "../../Redux"
import {useDispatch, useSelector} from "react-redux"
import {  useGetScheduleQuery } from "../../Redux2/Schedule/scheduleSlice"

function Section2 () {

    // const {schedule, loading} = useSelector((state) => state.schedule)
    // const dispatch = useDispatch()
    const query = {
        sortby: "schedule",
        order: "desc",
        limit: 5,
        page: 1
      }
    
      const { 
        data: schedule,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetScheduleQuery(query);

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
    return(
        <section className="container-fluid">
        <div className="row showing px-5 my-4 justify-content-between mt-5">
          <div className="col-6">
              <h4 className="pb-2 bold">Upcoming Movie</h4>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <a className="view font-s main-color bold " href="#">View All</a>
          </div>
        </div>

        <div className="btn-scroll btn-container mx-5">
              <button type="button" className="button btn btn-outline-primary text-center me-2 mb-2">September</button>
              <button type="button" className="button btn btn-outline-primary text-center me-2 mb-2">Oktober</button>
              <button type="button" className="button btn btn-outline-primary text-center me-2 mb-2">November</button>
              <button type="button" className="button btn btn-outline-primary text-center me-2 mb-2">Desember</button>
              <button type="button" className="button btn btn-outline-primary text-center me-2 mb-2">Januari</button>
              <button type="button" className="button btn btn-outline-primary text-center me-2 mb-2">Februari</button>
              <button type="button" className="button btn btn-outline-primary text-center me-2 mb-2">Maret</button>
              <button type="button" className="button btn btn-outline-primary text-center me-2 mb-2">April</button>
              <button type="button" className="button btn btn-outline-primary text-center me-2 mb-2">Mei</button>
              <button type="button" className="button btn btn-outline-primary text-center me-2 mb-2">Juni</button>
              <button type="button" className="button btn btn-outline-primary text-center me-2 mb-2">July</button>
              <button type="button" className="button btn btn-outline-primary text-center me-2 mb-2">Agustus</button>
        </div>

        <div className="movie-scroll  mx-5 my-5 ">
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
        </div>
        
        </section>
    )
}



export default Section2