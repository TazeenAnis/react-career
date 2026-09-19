import SearchBar from "./SearchBar";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
            <div className="container">

                <a className="navbar-brand fw-bold" href="#">
                    CareerConnect
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarContent"
                >
                    <ul className="navbar-nav ms-auto">
                        {/* <SearchBar /> */}

                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Jobs
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Companies
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Applications
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Login
                            </a>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;