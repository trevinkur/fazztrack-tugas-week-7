import {useParams} from "react-router-dom"
import Footer from "../../Component/Footer"
import Navbar from "../../Component/Navbar"
import Movie from "./Movie"
import Schedule from "./schedule"
import "./movieDetail.css"
import {useState, useEffect} from "react"
import axios from "axios"

function MovieDetail() {
    let params = useParams()

    const [refetch, setRefetch] = useState(false)
    const [search, setSearch] = useState({
        schedule: "",
        place:""
    })

    const [showSchedule, setShowSchedule] = useState({
        loading: false,
        result: {
            data: []
        }
    })
    useEffect(() => {
        setShowSchedule(((prevState) => {
            return{...prevState, loading: true}
        }))
        axios({
            method: "GET",
            url:  `http://localhost:5000/api/v1/schedule/${params.movieId}?schedule=${search.schedule}${search.place ? "&place=" + search.place : ""}`
        }).then((res) => setShowSchedule({
            loading: false,
            result: res.data
        })).catch()
    }, [refetch])

    return(
        <>
        <Navbar />
        <Movie id={params.movieId}/>
        <Schedule id={params.movieId} refetch={refetch} setRefetch={setRefetch}
            showSchedule={showSchedule} setShowSchedule={setShowSchedule}
            search={search} setSearch={setSearch}
        />
        <Footer />
        </>)
       
}

export default MovieDetail