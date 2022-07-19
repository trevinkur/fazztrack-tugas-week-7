import tickitz from "../img/logo-tickitz2.svg"
function Footer() {
    return(
            <footer className="container-fluid">
                <div class="row mt-5 mx-5 p-5 justify-content-center">
          <div class="col-lg-3 logo me-5">
            <div class="container d-flex flex-column ">
              <img class="mb-4" src="http://localhost:5000/static/logo-tickitz2.svg" alt="logo-tickitz" />
              <p class="font-s">Stop waiting in line. Buy tickets</p>
              <p class="font-s">conveniently, watch movies queitly</p>
            </div>
          </div>
          <div class="col-lg-2 explore me-5">
            
            <div class="container d-flex flex-column my-3">
              <a class="bold mb-3" href="#">Explore</a>
              <a href="#">Home</a>
              <a href="#">List Movie</a>
            </div>
          </div>
          <div class="col-lg-2 our-sponsor me-5 my-3">
            <div class="container d-flex flex-column">
              <a class="bold mb-3" href="#">Our Sponsor</a>
              <img class="mb-3" src="http://localhost:5000/static/logo-edu.svg" width="120px" height="45px" alt="movie" />
              <img class="mb-3" src="http://localhost:5000/static/logo-cine-one.svg" width="170px" height="26px"alt="movie" />
              <img class="mb-3" src="http://localhost:5000/static/logo-hiflix.svg" width="80px" height="25px" alt="movie" />
            </div>
          </div>
          <div class="col-lg-2 follow-us me-5 mt-3">
            <div class="container d-flex flex-column">
              <a class="bold mb-3" href="#">Follow Us</a>
              <div class="social-medial mb-2">
                <img class="pe-2" src="http://localhost:5000/static/facebook.svg" alt="facebook" />
                <a class="font-s" href="#">tickitz cinema.id</a>
              </div>
              <div class="social-medial mb-2">
                <img src="http://localhost:5000/static/instagram.svg"  alt="" />
                <a class="font-s" href="#">tickitz.id</a>
              </div>
              <div class="social-medial mb-2">
                <img src="http://localhost:5000/static/twitter.svg" alt="" />
                <a class="font-s" href="#">tickitz.id</a>
              </div>
              <div class="social-medial mb-2">
                <img src="http://localhost:5000/static/youtube.svg" alt="" />
                <a class="font-s" href="#">tickitz cinema.id</a>
              </div>
            </div>
          </div>
        </div>

        <div class="row text-center">
          <p class="font-s">2020 tickitz. All right preserved</p>
        </div>
            </footer>
            
        
    )
}

export default Footer