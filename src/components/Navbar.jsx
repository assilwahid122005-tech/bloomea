import { Link } from "react-router-dom";
import './StyleSheet.css'
function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg bg-light shadow-sm rounded-4 m-3 ">

            <div className="container">

                <Link className="navbar-brand fw-bold fs-3 bloomea-color" to="/"> Bloomea</Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <div className="navbar-nav ms-auto gap-3">

                        <Link className="nav-link text-success" to="/">Home</Link>
                        <Link className="nav-link text-success" to="/boxes">Our Boxes</Link>

                        <Link className="nav-link text-success" to="/contact">Contact</Link>

                    </div>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;