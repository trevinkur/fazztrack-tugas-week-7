import { useSelector } from "react-redux"
import { selectCurrentUser } from "../../Redux2/auth/authSlice"
import { useGetUserIdQuery } from "../../Redux2/users/usersSlice"
import Loading from "../Home/Loanding"

function Pitcure() {
    const {userId} = useSelector((state => state.auth))
    console.log(userId, "user")
    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUserIdQuery(userId)

    let content;
    if(isLoading) {
        content = <Loading/>
    } else if(isSuccess) {(
        content = users.data.map((user) => <Render user={user}/>)
    )} else if(isError) {
        content = <div>{error.toString()}</div>
    }
    
    return content
}

function Render(props) {
    const user = props.user
    return(
        <div class="col-lg-3 mx-3 mt-3">
                <div class="container profile-container bg-white">
                    <div class="container container-header d-flex flex-column border-bottom mb-3">
                        <p class="font-s mb-3">Info</p>
                        <img class="mb-3 align-self-center" src={`http://localhost:5000/static/${user.profile_pitcure}`} alt="Profile Pitcure" />
                        <p class="font-d-s bold mb-3 align-self-center">{`${user.first_name} ${user.last_name}`}</p>
                        <p class="font-s mb-3 align-self-center">Movigoers</p>
                    </div>
                    <div class="container text-center p-3">
                        <button class="btn btn-primary p-3 w-50">
                            Logout
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default Pitcure