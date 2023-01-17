import { Link, NavLink } from "react-router-dom";

import { setColorLink } from "helpers/setColorNavLink";

function Header() {
  return (
    <header className="flex h-48 items-center bg-edge-blue pl-20 text-sm font-bold text-white">
      <Link to={`/`} className="mr-32">
        To Do
      </Link>

      <ul className="flex">
        <li className="mr-12">
          <NavLink to={`tasks`} className={setColorLink}>
            Дела
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
