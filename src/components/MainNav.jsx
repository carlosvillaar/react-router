import { Link, NavLink } from "react-router-dom";

function MainNav() {
   return (
      <nav>
         <ul>
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