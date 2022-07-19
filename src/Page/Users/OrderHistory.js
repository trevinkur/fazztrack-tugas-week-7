import Loading from "../Home/Loanding";

function OrderHistory() {

    // const {userId} = useSelector((state => state.auth))
    // console.log(userId, "user")
    // const {
    //     data: users,
    //     isLoading,
    //     isSuccess,
    //     isError,
    //     error
    // } = useGetUserIdQuery(userId)

    // let content;
    // if(isLoading) {
    //     content = <Loading/>
    // } else if(isSuccess) {(
    //     content = users.data.map((user) => <Render user={user}/>)
    // )} else if(isError) {
    //     content = <div>{error.toString()}</div>
    // }
    
    // return content
    
    
}

function Render(props) {
    
    return(
        <>
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

        </>
        

       

    )
}

export default OrderHistory