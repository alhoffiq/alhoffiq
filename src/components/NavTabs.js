import { Link, useLocation } from "react-router-dom";

function NavTabs() {
    // We'll go into the Hooks API later, for now, we are just using some code
    // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
    // This allows the component to check the route any time the user uses a link to navigate.
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <h3 className="navbar-brand">Andrew Hoff</h3>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" classNameName={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            Home
        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/portfolio"
                            classNameName={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                        >
                            Portfolio
        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/contact"
                            classNameName={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                        >
                            Contact
        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavTabs;
