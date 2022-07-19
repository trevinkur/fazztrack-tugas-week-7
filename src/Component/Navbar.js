import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {Link} from "react-router-dom"
import tickitz from "../img/Tickitz.svg"
import Loading from "../Page/Home/Loanding"
import { signout } from "../Redux2/auth/authSlice"
import { useGetUserIdQuery } from "../Redux2/users/usersSlice"


function Navbar() {
  const {userId} = useSelector(state => state.auth)
  const dispatch = useDispatch()
  


  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch
  } = useGetUserIdQuery(userId)

  setInterval(( )=> {
    refetch()
  }, 100000)
  
  let content;
  if(isLoading) {
    content = <Loading/>;
  } else if(isSuccess) {
    content = users.data.map((user) => <div className="d-flex">
      <Link to="/users/account-setting">
        <img src={`http://localhost:5000/static/${user.profile_pitcure}`}
         alt={user.first_name} width="56px"></img>
      </Link>
      {/* <h1 className="font-d-m">{user.first_name}</h1> */}
      <button className="btn btn-primary"
       onClick={() => {dispatch(signout())}}>Sign Out</button>
    </div>)
  } else if (isError) {
    <h3>{error.toString()}</h3>
  }
  console.log(userId)
    return(
        <>
        <nav className="navbar navbar-desktop navbar-expand-lg bg-white">
        <div className="container-fluid">
            <Link to="/">
                <a className="navbar-brand" >
                    <img src={tickitz} alt="logo-tickitz" />
                </a>
            </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/">
                <a className="nav-link active bold" aria-current="page" href="">Home</a>
                </Link>
              </li>
              <li className="nav-item">
              <Link to="/list-movie">
              <a className="nav-link active bold" >List movie</a>
              </Link>
              </li>
            </ul>
          </div>
          
          {/* {userId ? (<div className="d-flex">
            <h1 className="font-d-m">{userId}</h1> 
            <button className="btn btn-primary" onClick={() => {dispatch(signout())}}>Sign Out</button></div>) : 
              <Link to="/authentication/signin">
          <button className="btn btn-primary" type="submit">Sign In</button>
          </Link> } */}
          {userId ? content :
            <Link to="/authentication/signin">
          <button className="btn btn-primary" type="submit">Sign In</button>
          </Link>
          }
          
        </div>
      </nav>

      <nav class="navbar nav-phone navbar-expand-lg bg-white p-2">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={tickitz} alt="logo-tickitz" />
          </a>
          <div class="hamburger-button d-flex flex-column align-items-end" id="navbarNav">
            <div class="line mb-1">
            </div>
            <div class="line-2 mb-1">
            </div>
            <div class="line"></div>
          </div>
        </div>
      </nav>
        </>
        
        
        
    )
}

export default Navbar