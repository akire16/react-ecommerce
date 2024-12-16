import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../Context/Context";

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-8 text-primary-color";

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-base font-light bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-2xl text-primary-color mr-12">
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
        <button className="flex hover:text-primary-color">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          {context.count}
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
