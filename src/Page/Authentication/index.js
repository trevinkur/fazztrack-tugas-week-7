import avengerBg from "../../img/avengerBg.png"
import "./authentication.css"
import tickitz from "../../img/tickitzWhite.png"
import { Outlet } from "react-router-dom"

function Authentication() {
    return(
    <div className="container-fluid bg-lightgray">
        <div className="row  justify-content-center">
    <div className="col-6">
            <div className=" img-container " >
                <div className="bg-main-color bg-image d-flex flex-column justify-content-center align-items-center">
                    <div>
                        <img src={tickitz} />
                    </div>
                    <p className="font-white">WOW, WOW, WOW</p>
                    
                </div>
                <img src={avengerBg} className="img-fluid image"/>
                
            </div>
        </div>
        <Outlet />
    </div>
    </div>
    
    
        
    )
}

export default Authentication