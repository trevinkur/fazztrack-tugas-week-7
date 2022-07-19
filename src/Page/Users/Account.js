import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetUserIdQuery,  useUpdateUserMutation } from "../../Redux2/users/usersSlice";
import Loading from "../Home/Loanding";

function Account() {

    const {userId} = useSelector((state => state.auth))
    
    
    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error,
        refetch
    } = useGetUserIdQuery(userId)

    
    let content;
    if(isLoading) {
        content = <Loading/>
    } else if(isSuccess) {(
        content = users.data.map((user) => <Render user={user} refetch={refetch}  />)
    )} else if(isError) {
        content = <div>{error.toString()}</div>
    }
    
    return content
}

function Render(props) {
    
    const {user, refetch} = props

    const [updataUser, {isError}] =  useUpdateUserMutation()
    const [editUser, setEditUser] = useState({
        id: user.user_id,
        first_name: user.first_name,
        last_name: user.last_name,
        phone_number: user.phone_number,
        email: user.email

    })

    const handleSubmit = (e) => {
        e.preventDefault()
        updataUser(editUser)
        refetch()
        isError ?
        alert("Error") : alert("success") 
    }

    return(<form onSubmit={handleSubmit}>
        <div className="container p-5 bg-white">
            <div className="border-bottom p-3">
                <h3 className="font-d-m">Details Information </h3>
            </div>

            <div className="row my-3">
                <div className="col-md">
                    <label for="firstName" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="firstName" value={editUser.first_name}
                    onChange={(e) => setEditUser((prevState) => ({...prevState, first_name: e.target.value})) } />
                </div>
                <div className="col-lg">
                    <label for="firstName" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="firstName" value={editUser.last_name} 
                    onChange={(e) => setEditUser((prevState) => ({...prevState, last_name: e.target.value})) }
                    />
                </div>      
            </div>
            <div className="row my-3">
                <div className="col-lg ">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" value={editUser.last_name}
                    onChange={(e) => setEditUser((prevState) => ({...prevState, email: e.target.value})) } />
                </div>
                <div className="col-lg">
                <label for="phoneNumber" class="form-label">Phone Number</label>
                <div className=" input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">+62</span>
                    <input type="tel" class="form-control" value={editUser.phone_number}
                    onChange={(e) => setEditUser((prevState) => ({...prevState, phone_number: e.target.value})) }
                    id="phoneNumber" aria-label="phoneNumber" aria-describedby="addon-wrapping" />
                </div>
                </div>
                
            </div>
        </div>
        <div className="row my-3">
        <div className="col-lg-6">
            <button className="btn btn-primary" onClick={handleSubmit}>Update Changes</button>
        </div>

        </div>
    </form>)
}
export default Account