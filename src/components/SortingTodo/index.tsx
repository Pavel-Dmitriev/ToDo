import React from "react";

import Dropdown from "components/Dropdown";

function SortingTodo() {
  return (
    <div>
      <Dropdown
        button={<button>SortingTodo</button>}
        // onClose={() => console.log("closed")}
        // onOpen={() => console.log("opened")}
      >
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Tree</li>
        </ul>
      </Dropdown>
    </div>
  );
}

export default SortingTodo;
