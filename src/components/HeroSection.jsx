function HeroSection() {

    const platformName = "CareerConnect";
    const availableJobs = 1250;

    return (
        <section className="bg-light py-5">

            <div className="container">

                <div className="row align-items-center">

                    <div className="col-md-7">

                        <p className="text-primary fw-bold">
                            Welcome to {platformName}
                        </p>

                        <h1 className="display-4 fw-bold">
                            Find Your Dream Job
                        </h1>

                        <p className="lead">
                            Explore {availableJobs}+
                            career opportunities from leading companies.
                        </p>

                        <button className="btn btn-primary btn-lg">
                            Explore Jobs
                        </button>

                    </div>

                    <div className="col-md-5">

                        <div className="text-center">

                            <div
                                className="bg-primary text-white rounded-circle
                                           d-inline-flex align-items-center
                                           justify-content-center"
                                style={{
                                    width: "220px",
                                    height: "220px"
                                }}
                            >
                                <h2>Career</h2>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default HeroSection;