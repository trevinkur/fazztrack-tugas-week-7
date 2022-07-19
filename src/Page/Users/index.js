import Footer from "../../Component/Footer"
import Navbar from "../../Component/Navbar"
import Pitcure from "./Pitcure"
import "./orderHistory.css"
import { Outlet } from "react-router-dom"

function Users() {
    return(<>
        <Navbar/>
        <main className="container-fluid grayscale-3 p-3">
            <div className="row">
            <Pitcure />
                <div class="col-lg-8 mx-3 mt-3">
                <div class="row mb-3">
                <div class="container bg-white d-flex">
                    <div class="container-setting p-4">
                        <p class="font-m"> Account Setting</p>
                    </div>
                    <div class="container-history border-bottom border-primary p-4">
                        <p class="font-d-s">Order History</p>
                    </div>
                </div>
                </div>
                <Outlet />
                </div>
            </div> 
        </main>
        <Footer />
    </>)
}

export default Users