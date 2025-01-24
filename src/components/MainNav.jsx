import { Link, NavLink } from "react-router-dom";

function MainNav() {
   return (
      <nav>
         <ul className="list-unstyled d-flex gap-5 my-5 justify-content-center">
            <li>
               <NavLink to="/">Home</NavLink>
            </li>
            <li>
               <NavLink to="/chi-siamo">Chi siamo</NavLink>
            </li>
            <li>
               <NavLink to="/contatti">Contatti</NavLink>
            </li>
         </ul>
      </nav>
   )
}


export default MainNav