import React from "react";

function Header() {
  return (
    <header className="flex h-48 items-center bg-edge-blue pl-20 text-sm font-bold text-white">
      <a href="/" className="mr-32">
        To Do
      </a>
      <ul className="flex">
        <li className="mr-12">
          <a href="tasks">Дела</a>
        </li>
        <li>
          <a href="reminder">Напоминание</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
