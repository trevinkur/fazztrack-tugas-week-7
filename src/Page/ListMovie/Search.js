import { useDispatch, useSelector } from "react-redux"
import { addScheduleTitle } from "../../Redux2/Schedule/scheduleQuerySlice"
import { useGetScheduleQuery } from "../../Redux2/Schedule/scheduleSlice"

function Search() {
    const query = useSelector((state => state.scheduleQuery))
    const dispatch = useDispatch()
    console.log(query)
    const {refetch} = useGetScheduleQuery()
    return (<>
        <div className="row m-4">
            <div className="col">
                <h1 className="font-d-m bold">List Movie</h1>
            </div>
            <div className="col-4 ">
            <div className="row">
                <div className="col-4">
                <select class="form-select me-3 font-s" aria-label="Default select example">
                <option selected>Sort</option>
                <option value="asc">ASC</option>
                <option value="desc">DESC</option>
                
                </select>
                </div>
                <div className="col-8">
                <input type="text" class="form-control" 
                id="searchMovies" placeholder="Search Movies"
                 onChange={(e) =>{ dispatch(addScheduleTitle(e.target.value)); refetch()}}></input>
                </div>
            </div>
            
           
            
            </div>
        </div>
    </>)
}

export default Search