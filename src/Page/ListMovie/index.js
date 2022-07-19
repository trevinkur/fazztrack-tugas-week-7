import Footer from "../../Component/Footer"
import Navbar from "../../Component/Navbar"
import Search from "./Search";
import Month from "./Month";
import Movies from "./Movies";
import ButtonPage from "./ButtonPage";

function ListMovie() {
    return(
        <>
            <Navbar />
            <main className="container-fluid p-5 grayscale-4">
                <Search />
                <Month />
                <Movies />
                <ButtonPage/>
            </main>
            
            <Footer />
        </>
        
    )
}

export default ListMovie