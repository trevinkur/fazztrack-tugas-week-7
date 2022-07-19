import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom"


function VerifyAuth() {
    const {token} = useSelector((state) => state.auth)
    const location = useLocation()
    // const navigate = useNavigate()
    // let content
    // if(token) {
    //     content = <Outlet />
    // } else {
    //     navigate("../authentication/signin", {replace: true})
    // }
    return (
        token ? 
        <Outlet /> :
        <Navigate to="/authentication/signin" state={{from: location}} replace/>
        )
    // return content
}

export default VerifyAuth