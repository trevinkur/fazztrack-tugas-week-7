import Footer from "../../Component/Footer"
import Navbar from "../../Component/Navbar"
import "./orderPage.css"
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import Seat from "./Seat"
import Movie from "./Movie"
import OrderInfo from "./OrderInfo"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

function OrderPage() {
    const search = useLocation().search;
    const scheduleQuery = new URLSearchParams(search).get("schedule")
    const place = new URLSearchParams(search).get("place");
    const cinema = new URLSearchParams(search).get("cinema")

    let params = useParams()
    const [query, setQuery] = useState({
        id: params.movieId,
        schedule: scheduleQuery,
        place: place,
        cinema: cinema,
        limit: 5,
        page: 1
    })
    

    
    return(<>
        <Navbar />
        <section className="main bg-lightgray">
        <div className="row">
            <div className="col-lg-8">
                <div className="container movie-container-desc d-flex flex-column p-5">

                    <Movie query={query} setQuery={setQuery} id={params.movieId}  />
                    <Seat />
                    <div className="row justify-content-around">
                        <div className="checkout col-sm-4">
                            <div className="d-grid gap-2">
                                <button className="btn btn-outline-primary p-3">Change Your Movie</button>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <Link to={`/${params.movieId}/payment/${params.scheduleId}`}className="d-grid gap-2">
                                <button className="btn btn-primary p-3 shadow">Chekout Now</button>
                            </Link>
    
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="col-lg-4">
                <OrderInfo query={query} />
            </div>
        </div>
    </section>
    <Footer/>
    </>)
}

export default OrderPage