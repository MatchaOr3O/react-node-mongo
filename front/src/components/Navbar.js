import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <nav className = "navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link className = "navbar-brand" to="/">CRUD</Link>
                <div>
                 <ul className="">
                  <li className="nav-item">
                     <Link className = "nav-link" to="/add">Add User</Link>
                  </li>
                 </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;