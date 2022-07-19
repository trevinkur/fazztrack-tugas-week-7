import Navbar from "../../Component/Navbar"
import Footer from "../../Component/Footer"
import spiderMan from "../../img/spiderman-header.png"
import lionKing from "../../img/lion-header.png"
import blackWidow from "../../img/header2.png"
import "./homepage.css"
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"

function Home() {
    return(
        <>
            <Navbar />
            <Header />
            <main>
                <Section1 />
                <Section2 />
                <Section3 />
            </main>
            <Footer />
        </>
        
    )
}

function Header() {
    return(
        <header className="container container-header">
        <div className="row d-flex align-items-center">
            <div className="col d-flex flex-column align-items-center">
                <h4>Nearest Cinema, Newest Movie</h4>
                <h1 className="main-color bold">Find Out Now!</h1>
            </div>
            <div className="col">
                <div className="d-flex flex-row mb-3 justify-content-center">
                    <div className="image-container shadow mb-5 mt-5 me-2 bg-body rounded ">
                        <img src={lionKing} />
                    </div>
                    <div className="image-container shadow mb-5 mt-3 me-2 bg-body rounded image-2">
                        <img className="" src={blackWidow} />
                    </div>
                    <div className="image-container shadow mb-5 me-2 bg-body rounded image-3 ">
                        <img className="" src={spiderMan} />
                    </div>
                </div> 
            </div>
        </div>
      </header>
    )
}

export default Home