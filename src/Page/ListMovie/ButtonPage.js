import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useSearchParams } from "react-router-dom";
import { addQuery, addScheduleLimit, addSchedulePage, increament } from "../../Redux2/Schedule/scheduleQuerySlice"
import { useGetScheduleQuery } from "../../Redux2/Schedule/scheduleSlice";
import Loading from "../Home/Loanding";


function ButtonPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    // const search = useLocation().search
    // const page = new URLSearchParams(search).get("page")
    const query = useSelector(state => state.scheduleQuery);
    const dispatch = useDispatch()
    // const [offSet, setOffset] = useState(0)
    // const [pages, setPages] = useState(1)
    // const [numOfPages, setNumOfPages] = useState([])
    const limit = 3;

    useEffect(()=> {
        // dispatch(addQuery({
        //     sortby: "schedule",
        //     order: "asc",
        //     limit: 3,
        //     page: 1
        // }))
        dispatch(addScheduleLimit(3))
    }, [query])

    // useEffect(() => {
    //     setOffset((pages - 1) * limit)
    // }, [])

    // useEffect(() => {
    //     setNumOfPages()
    // }, [numOfPages])
    

    // console.log(query, "button")
   

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
        const dataLength = Array(schedule.totalPage).fill()
      
    //    setNumOfPages(fill.concat(offSet, ))
    // console.log(pages)
    // console.log(offSet)
    // console.log(searchParams)
       content = <div className="d-flex justify-content-center">
            {dataLength.map((item, index) => <Render index={(index+1)} setSearchParams={setSearchParams} key={index}/>)}
       </div>
    } else if(isError) {
        content = <div>{error.toString()}</div>
    }

    
    return (<>
        {content}
    </>)
}

function Render(props) {
    const [searchParams, setSearchParams] = useSearchParams()
    const query = useSelector(state => state.scheduleQuery);
    const {index} = props
    const dispatch = useDispatch()
    const search = useLocation().search
    const page = new URLSearchParams(search).get("page")
    // const handleClick = () => {dispatch(addQuery({page: index}))}
    let content
    // setSearchParams({page: query.page})
    console.log(query.page, "page")
    useEffect(() => {
        dispatch(addSchedulePage(page ? page : 1))
    }, [page])
    const validasi = (page) => {
        if(page) {
            return Number(page)
        } else {
            return 1
        }
    }
    if(index === validasi(page)) {
        content = (
        <button className="btn btn-danger me-2"
        onClick={() => {  setSearchParams({page: index})  }} 
        >{index}</button>
    )} else {
        content = (
            <button className="btn btn-primary me-2"
            onClick={() => {  setSearchParams({page: index})}} 
            >{index}</button>
        )
    }
    return content
}

export default ButtonPage