import React, { useState, useEffect, ReactNode } from "react";

interface IDropdownOpen {
  button: ReactNode;
  children: ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

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
          <div onClick={() => setIsDropdownOpen(false)}>{children}</div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
