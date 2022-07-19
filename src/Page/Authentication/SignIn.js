import avengerBg from "../../img/avengerBg.png"
import "./authentication.css"
import tickitz from "../../img/tickitzWhite.png"
import { useSigninMutation } from "../../Redux2/auth/authApiSlice"
import { useDispatch } from "react-redux"
import { useEffect, useRef, useState } from "react"
import { setCredentials } from "../../Redux2/auth/authSlice"
import Loading from "../Home/Loanding"
import { useNavigate } from "react-router-dom"




function SignIn() {
    const  [user, setUser] = useState();
    const [pwd, setPwd] = useState();
    const [errMsg, setErrMsg] = useState()
    const userRef = useRef()
    const navigate = useNavigate()

    const [
        signin,
        {isLoading}
    ] = useSigninMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        userRef.current.focus()
    },[])

    useEffect(()=> {
        setErrMsg("")
    },[user,pwd])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const result = await signin({email: user, password: pwd}).unwrap()
            console.log(result, "hello")
            dispatch(setCredentials({...result, user}))
            setUser("")
            setPwd("")
            navigate("/", {replace: true} )
            
        } catch(err) {
            if(!err?.response) {
                setErrMsg("No Server Response")
            } else if(err.originalStatus === 400) {
                setErrMsg("email/password is wrong")
            } else if (err.originalStatus === 401) {
                setErrMsg("unauthorized")
            } else {
                setErrMsg("sign in failed")
            }
        }
    }

    let content;
    if(isLoading) {
        content = <Loading />
    } else {
        // content = (<div className="container-fluid">
        {/* <div className="row  justify-content-center">
        <div className="col-6">
            <div className="img-container" >
            <div className="bg-main-color bg-image"></div>
                <img src={avengerBg} className="img-fluid image"/>
                
            </div>
        </div> */}
       content = <div className="col-3 bg-white form d-flex align-items-center">
            <div className="container d-flex flex-column p-3 ">
            <h1 className="font-d-l bold mb-3">Sign In</h1>
            <p className="font-m mb-3">Sign in with your data that you entered during
                your registration</p>
            <form className="d-flex flex-column" onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="email" class="form-label font-d-xs" >Email address</label>
                    <input type="email" class="form-control"
                     id="email" placeholder="name@example.com"
                     ref={userRef} value={user} 
                     onChange={(e) => {setUser(e.target.value)}}
                     autoComplete="off" required />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label font-d-xs">Password</label>
                    <input type="password" class="form-control"
                     id="password" placeholder="password"
                     value={pwd} 
                     onChange={(e) => {setPwd(e.target.value)}}
                     required/>
                </div>
                <div class="d-grid gap-2">
                    <button type="submit" class="btn btn-primary mb-3" onClick={handleSubmit}>Confirm identity</button>
                </div>
                <p className="font-s align-self-center ">Forgot password ? Reset</p>
                <p className="font-s align-self-center ">Don't have an account ? Sign Up</p>
            
            </form>
            {errMsg && <div>{errMsg}</div>}
            </div>
            
            
        </div>
    // </div>
    // </div>)
    }
    return content
}

export default SignIn