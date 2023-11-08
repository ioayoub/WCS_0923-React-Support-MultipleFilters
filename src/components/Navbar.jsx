import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex flex-row justify-between bg-neutral-800 p-4 text-white">
      <span className="block my-auto">MyWebsite_</span>

      <ul className="flex flex-row gap-8">
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/products">Produits</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
