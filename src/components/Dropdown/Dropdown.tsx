import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export type Option = {
  value: string;
  onClick: () => void;
  color?: string;
};

interface DropdownItemProps {
  icon?: string;
  options: Array<Option>;
}

export default function Dropdown({ icon, options }: DropdownItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div className="" onClick={toggleDropdown}>
        <BsThreeDotsVertical />
      </div>
    </div>
  );
}
