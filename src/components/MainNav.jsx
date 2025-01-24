import { Link, NavLink } from "react-router-dom";

function MainNav() {
  return (
    <nav className="bg-warning p-3">
      <ul className="list-unstyled  d-flex gap-5 my-5 justify-content-center">
        <li>
          <NavLink className={"text-decoration-none"} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={"text-decoration-none"} to="/chi-siamo">
            Chi siamo
          </NavLink>
        </li>
        <li>
          <NavLink className={"text-decoration-none"} to="/contatti">
            Contatti
          </NavLink>
        </li>
        <li>
          <NavLink className={"text-decoration-none"} to="/posts">
            Lista dei Post
          </NavLink>
        </li>
        <li>
          <NavLink className={"text-decoration-none"} to="/crea-post">
            Crea Nuovo
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
