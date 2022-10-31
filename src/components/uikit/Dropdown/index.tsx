import { useState, useEffect } from "react";

import { IDropdownOpen } from "./interface";

const NOOP = () => {};

function Dropdown({ button, children, isOpen, onClose = NOOP, onOpen = NOOP }: IDropdownOpen) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
  useEffect(() => {
    setIsDropdownOpen(isOpen);
  }, [isOpen]);
  useEffect(() => (isDropdownOpen ? onOpen() : onClose()), [isDropdownOpen]);

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };
  return (
    <div>
      <div onClick={handleOpen}>{button}</div>
      {isDropdownOpen && (
        <div>
          <div onClick={() => setIsDropdownOpen(false)} className="relative">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
