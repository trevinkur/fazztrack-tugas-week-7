function Section3 () {
    return(
        <section>
            <div className="row mx-5 mb-5">
                <div className="container d-flex flex-column align-items-center py-5 shadow rounded text-center">
                    <h4>Be a vanguard of the</h4>
                    <h2 className="bold main-color">Moviegoers</h2>
                    <form className="row g-3 my-3">
                    <div className="col-sm-8">
                        <label for="staticEmail2" className="visually-hidden">Email</label>
                        <input type="text" className="form-control" id="staticEmail2" placeholder="Type your email" />
                    </div>
                    <div className="col-sm-4 d-grid gap-2">
                        <button type="submit" className="btn btn-primary mb-3">Join Now</button>
                    </div>
                    </form>
                    <p className="font-s">by joining you as a Tickitz member</p>
                    <p className="font-s">We will alwals send you the latest updates via email</p>
                </div>
            </div>
        </section>
        
    )
}

export default Section3