import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom"

function AlreadySignin() {
    const {userId} = useSelector((state) => state.auth)
    const location = useLocation()
    return (
        userId ? 
        <Navigate to="/"/> 
        : <Outlet /> 
        
        )
}

export default AlreadySignin