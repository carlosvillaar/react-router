import { Link, NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <nav>
      <nav>
      <Link to="/">Home Page</Link>
      <NavLink to="/chi-siamo">Chi siamo</NavLink>
      <NavLink to="/contatti">Contatti</NavLink>
    </nav>
    </nav>
  )
}

export default MainNav