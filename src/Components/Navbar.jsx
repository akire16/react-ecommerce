import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = "underline underline-offset-8 text-primary-color";

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-base font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-2xl text-primary-color">
          <NavLink to="/">ShopPlants</NavLink>
        </li>
        <li className="hover:text-primary-color">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li className="hover:text-primary-color">
          <NavLink
            to="/plants"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Plants
          </NavLink>
        </li>
        <li className="hover:text-primary-color">
          <NavLink
            to="/flowers"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Flowers
          </NavLink>
        </li>
        <li className="hover:text-primary-color">
          <NavLink
            to="/trees"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Trees
          </NavLink>
        </li>
        <li className="hover:text-primary-color">
          <NavLink
            to="/bonsai"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Bonsai
          </NavLink>
        </li>
        <li className="hover:text-primary-color">
          <NavLink
            to="/sale"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sale
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">erika@gmail.com</li>
        <li className="hover:text-primary-color">
          <NavLink to="/my-orders">My Orders</NavLink>
        </li>
        <li className="hover:text-primary-color">
          <NavLink to="/my--account">My Account</NavLink>
        </li>
        <li className="hover:text-primary-color">
          <NavLink to="/sign-in">Sign In</NavLink>
        </li>
        <li>🛒 0</li>
      </ul>
    </nav>
  );
};

export default Navbar;
