import "./paymentInfo.css"
import Navbar from "../../Component/Navbar"
import Footer from "../../Component/Footer"
import { useGetBookingByIdQuery } from "../../Redux2/booking/bookingSlice"
import Loading from "../Home/Loanding"

function PaymentInfo() {
    
    const {
        data: booking,
        isLoading,
        isSuccess,
        isError,
        error    
    } = useGetBookingByIdQuery(1)
    
    let content;
    if(isLoading) {
        content = <Loading />
    } else if(isSuccess) {
        content = booking.data.map((item) => <div>{item.fullname}</div>)
    } else if(isError) {
        content = <div>{error.toString()}</div>
    }
    return(<>
         <Navbar/>
         {content}
         <section class="grayscale-2 px-sm-5 pt-sm-5 pb-5">
        <div class="row ">
            <div class="col-lg-8 p-sm-5">
                <h3 class="payment-info font-d-m mb-3 mx-sm-4 bold">Payment Info</h3>
                <div class="row mb-3 mx-sm-4">
                    <div class="container d-flex flex-column p-4 bg-white">
                        <div class="container date-container date d-flex justify-content-between py-3 border-bottom">
                            <p class="font-m">Date & Time</p>
                            <p class="font-d-s bold">Tuesday, 07 July 2020 at 02:00 </p>
                        </div>
                        <div class="container movie-title-container date d-flex justify-content-between py-3 border-bottom">
                            <p class="font-m ">Movie Tittle</p>
                            <p class="font-d-s bold">Spider-Man: Homecoming</p>
                        </div>
                        <div class="container cinema-name-container date d-flex justify-content-between py-3 border-bottom">
                            <p class="font-m">Cinema name</p>
                            <p class="font-d-s bold">CineOne21 Cinema </p>
                        </div>
                        <div class="container tickets-container d-flex justify-content-between py-3 border-bottom">
                            <p class="font-m">Number of tickets</p>
                            <p class="font-d-s bold">3 pieces </p>
                        </div>
                        <div class="container date d-flex justify-content-between py-2 ">
                            <p class="font-m">Total payment</p>
                            <p class="font-d-s bold">$30,00 </p>
                        </div>
                    </div>
                </div>

                <h3 class="font-d-m mb-3 mx-4 bold">Choose Payment Method</h3>
                <div class="row mb-3 mx-4">
                    <div class="container d-flex flex-column p-3 bg-white ">
                        <div class="container payment d-flex flex-wrap justify-content-center">
                            <div class="container container-image text-center  py-2 m-3 border">
                                <img src="./img/logos_google-pay.svg" alt="payment" />
                            </div>
                            <div class="container container-image text-center  py-2 m-3 border">
                                <img src="./img/logos_visa.svg" alt="payment"/>
                            </div>
                            <div class="container container-image text-center  py-2 m-3 border">
                                <img src="./img/logo-gopay.svg" alt="payment" />
                            </div>
                            <div class="container container-image text-center  py-2 m-3 border">
                                <img src="./img/logos_paypal.svg" alt="payment" />
                            </div>
                            <div class="container container-image text-center  py-2 m-3 border">
                                <img src="./img/logo-dana.svg" alt="payment"/>
                            </div>
                            <div class="container container-image text-center  py-2 m-3 border">
                                <img src="./img/bank-bca.svg" alt="payment" />
                            </div>
                            <div class="container container-image text-center  py-2 m-3 border">
                                <img src="./img/bank-bri.svg" alt="payment" />
                            </div>
                            <div class="container container-image text-center  py-2 m-3 border">
                                <img src="./img/logo-ovo.svg" alt="payment" />
                            </div> 
                        </div>

                        <div class="container d-flex align-items-center">
                            <div class="line-break w-50 grayscale-2 m-3"></div>
                            <p>Or</p>
                            <div class="line-break w-50 grayscale-2 m-3"></div>
                        </div>

                        <p class="font-s align-self-center m-3">Pay via cash. <a class="main-color bold" href="#">See how it works</a></p> 
                    </div>                    
                </div>

                
            </div>
            <div class="col-lg-4 p-5">
                <h3 class="font-d-m mb-3 bold">Personal-info</h3>
                <form class="container bg-white p-5" action="">
                    <div class="mb-3">
                        <label for="fullName" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="fullName" placeholder="Jonas El Rodriguez" />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="jonasrodri123@gmail.com" />
                    </div>
                    <div class=" mb-3">
                        <label for="phoneNumber" class="form-label">Phone Number</label>
                        <div class="input-group">
                            <span class="input-group-text bg-white" id="inputGroup-sizing-default">+62</span>
                            <input type="number" class="form-control" id="phoneNumber" placeholder="81445687121" />
                        </div>
                    </div>
                    <div class="container d-flex justify-content-center bg-warning p-3">
                      <img src="./img/warning.svg" alt="logo"/>
                      <p class="font-d-xs align-self-center non-blur ms-3">Fill your data correctly</p>
                    </div>
                   
                    
                      
                </form>
            </div>
        </div>

        <div class="row mx-4">
          <div class="col-lg-8">
            <div class="row justify-content-between mx-lg-2">
              <div class="col-md-4">
                  <div class="d-grid gap-2 btn-change-movie">
                      <button class="btn btn-outline-primary p-3 shadow">Change Your Movie</button>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="d-grid gap-2 ">
                      <button class="btn btn-primary p-3 shadow">Chekout Now</button>
                  </div>
                  
              </div>

          </div>
         
        </div>
        </div>
    </section>
    <Footer />
    </>)
}

export default PaymentInfo