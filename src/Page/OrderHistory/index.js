import Footer from "../../Component/Footer"
import Navbar from "../../Component/Navbar"
import "./orderHistory.css"

function OrderHistory() {
    return(<>
        <Navbar/>
        <section class="grayscale-2 p-5">
        <div class="row">
            <div class="col-lg-3 mx-3 mt-3">
                <div class="container profile-container bg-white">
                    <div class="container container-header d-flex flex-column border-bottom mb-3">
                        <p class="font-s mb-3">Info</p>
                        <img class="mb-3 align-self-center" src="./img/profilePitcure.png" alt="Profile Pitcure" />
                        <p class="font-d-s bold mb-3 align-self-center">Jonas El Rodriguez</p>
                        <p class="font-s mb-3 align-self-center">Movigoers</p>
                    </div>
                    <div class="container text-center p-3">
                        <button class="btn btn-primary p-3 w-50">
                            Logout
                        </button>
                    </div>
                </div>
            </div>
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

                <div class="row mb-3">
                    <div class=" container bg-white d-flex flex-column">
                        <div class="container border-bottom p-5">
                            <div class="row justify-content-between">
                                <div class="col logo-phone mb-3">
                                    <img src="./img/logo-cine-one.svg" alt="logo"/>
                                </div>
                                <div class="col-lg-5 ">
                                    <p class="font-xs">Tuesday, 07 July 2020 - 04:30pm</p>
                                    <p class="font-d-m bold">Spider-Man: Homecoming</p>
                                </div>
                                <div class="col-lg-3 logo-desktop">
                                    <img src="./img/logo-cine-one.svg" alt="logo" />
                                </div>
                            </div>
                            
                        </div>
                        <div class="row container d-flex justify-content-between px-5 py-4">
                            <div class="col-sm-4">
                              <div class="d-grid gap-2">
                                <button class="btn btn-success " type="button">Ticket active</button>
                              </div>
                            </div>
                            <div class="col-sm-4 text-end">
                              <a class="font-m see-details" href="#">See Details</a>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="row mb-3">
                    <div class="container bg-white d-flex flex-column">
                        <div class="container border-bottom p-5">
                            <div class="row justify-content-between">
                                <div class="col logo-phone mb-3">
                                  <img src="./img/logo-cine-one.svg" alt="logo" />
                                </div>
                                <div class="col-lg-5">
                                    <p class="font-xs">Tuesday, 07 July 2020 - 04:30pm</p>
                                    <p class="font-d-m bold">Spider-Man: Homecoming</p>
                                </div>
                                <div class="col-lg-3 logo-desktop">
                                    <img src="./img/logo-cine-one.svg" alt="logo" />
                                </div>
                            </div>
                            
                        </div>
                        <div class="row container d-flex justify-content-between px-5 py-4">
                            <div class="col-sm-4 ">
                              <div class="d-grid gap-2">
                                <button class="btn btn-secondary" type="button" disabled>Ticket active</button>
                              </div>
                            </div>
                            <div class="col-sm-4 text-end">
                              <a class="font-m see-details" href="#">See Details</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="container bg-white d-flex flex-column">
                        <div class="container border-bottom p-5">
                            <div class="row justify-content-between">
                                <div class="col logo-phone mb-3">
                                  <img src="./img/logo-cine-one.svg" alt="logo" />
                                </div>
                                <div class="col-lg-5">
                                    <p class="font-xs">Tuesday, 07 July 2020 - 04:30pm</p>
                                    <p class="font-d-m bold">Spider-Man: Homecoming</p>
                                </div>
                                <div class="col-lg-3 logo-desktop">
                                    <img src="./img/logo-cine-one.svg" alt="logo" />
                                </div>
                            </div>
                            
                        </div>
                        <div class="row container d-flex justify-content-between px-5 py-4">
                          <div class="col-sm-4">
                            <div class="d-grid gap-2">
                              <button class="btn btn-secondary " type="button" disabled>Ticket active</button>
                            </div>
                          </div>
                          <div class="col-sm-4 text-end">
                            <a class="font-m see-details" href="#">See Details</a>
                          </div>
                      </div>
                    </div>
                </div>


            </div>
        </div>
    </section>
    <Footer />

    </>)
}

export default OrderHistory