import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../Redux2/auth/authApiSlice";
import { useAddUserMutation } from "../../Redux2/users/usersSlice"

function Register() {
    const [register, {isLoading, isError, error}] = useRegisterMutation()
    const [user, setUser] = useState({});
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(isError)
        try {
            await register(user).unwrap();
            navigate("/authentication/signin", {replace: true})
        } catch(err) {
            console.log(err)
        }
       
    }

    return(
        <div className="col-4 bg-white form  d-flex align-items-center px-3">
            <div className="container d-flex flex-column py-3 px-5 ">
            <h1 className="font-d-l bold">Sign Up</h1>
            <p className="font-s mb-3">Fill your additional details</p>
            <form className="d-flex flex-column" onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="firstName" class="form-label font-d-xs">First Name </label>
                    <input type="text" class="form-control" id="firstName" placeholder="First Name"
                    onChange={(e) => setUser((prevState) =>({...prevState, first_name: e.target.value}) )} />
                </div>
                <div class="mb-3">
                    <label for="lastName" class="form-label font-d-xs">Last Name </label>
                    <input type="text" class="form-control" id="lastName" placeholder="Last Name" 
                    onChange={(e) => setUser((prevState) =>({...prevState, last_name: e.target.value}) )}
                    />
                </div>
                <div class="mb-3">
                    <label for="phoneNumber" class="form-label font-d-xs">Phone Number </label>
                    <input type="tel" class="form-control" id="phoneNumber" placeholder=""
                    onChange={(e) => setUser((prevState) =>({...prevState, phone_number: e.target.value}) )} />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label font-d-xs">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="name@example.com"
                    onChange={(e) => setUser((prevState) =>({...prevState, email: e.target.value}) )} />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label font-d-xs">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="password"
                    onChange={(e) => setUser((prevState) =>({...prevState, password: e.target.value}) )} />
                </div>
                <div class="d-grid gap-2">
                    <button type="submit" class="btn btn-primary mb-3"
                    onClick={handleSubmit} >Confirm identity</button>
                </div>
                <p className="font-s align-self-center">Already have account ? 
                <Link to="/authentication/signin" className="main-color">Sign In</Link> </p>
            </form>
            </div>
            
        </div>
    )
}

export default Register