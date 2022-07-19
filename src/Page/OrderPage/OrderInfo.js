import Loading from "../Home/Loanding"
import moment from "moment"
import { useSelector, useDispatch } from "react-redux"
import { useGetScheduleByMovieIdQuery } from "../../Redux2/Schedule/scheduleSlice"
import { useEffect } from "react"

function OrderInfo (props) {
    const { query} = props
    // const {schedule, loading} = useSelector((state) => state.schedule)
    // const dispatch = useDispatch()
    
    
    // useEffect(()=> {
    //     dispatch(fetchSchedule(query))
    // }, [])
    // return(<>
    //     {loading ? <Loading /> : schedule.data ? schedule.data.map((item) => <Render item={item} key={item.schedule_id}/>) : null }
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
    return(<>
        <div className="card m-5">
                    <div className="card-header mb-3 text-center bg-white my-3">
                        <img className="mb-3" src={"http://localhost:5000/static/" + item.cinema_logo} alt="Cinema" />
                        <h3 className="font-d-m bold">{item.cinema_name}</h3>
                    </div>
                    <div className="card-body mx-3">
                        <div className="row justify-content-between">
                            <div className="col-4 mb-3">
                                <p className="font-xs">Movie Selected</p>
                            </div>
                            <div className="col-8 mb-3 text-end">
                                <p className="font-xs bold ">{item.title}</p>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-8 mb-3 ">
                                <p className="font-xs ">{moment(item.schedule).format("dddd, DD MMMM YYYY") }</p>
                            </div>
                            <div className="col-4 mb-3 text-end">
                                <p className="font-xs bold ">{}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8 mb-3">
                                <p className="font-xs">One ticket price</p>
                            </div>
                            <div className="col-4 mb-3 text-end">
                                <p className="font-xs bold ">$10</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 mb-3">
                                <p className="font-xs">Seat choose</p>
                            </div>
                            <div className="col-6 mb-3 text-end">
                                <p className="font-xs bold ">C4, C5, C6</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer bg-white p-4">
                        <div className="row justify-content-between">
                            <div className="col-6 d-flex align-items-center">
                                <p className="font-d-s bold">Total Payment</p>
                            </div>
                            <div className="col-4 text-end">
                                <p className="font-d-s bold main-color">$30</p>
                            </div>
                        </div>
                    </div>
                </div>
    </>)
}
export default OrderInfo