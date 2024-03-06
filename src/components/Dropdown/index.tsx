import { useState, useEffect, useRef } from "react";
import { useMobile } from "util/device";
import { DropdownWrapper, DropdownContent, Option, Button } from "./styled";

interface DropdownButtonProps {
  button: any;
  options: any[];
}

const Dropdown = ({ button, options }: DropdownButtonProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLButtonElement>(null);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };
  return (
    <DropdownWrapper>
      <Button ref={dropdownRef} onClick={() => toggleDropdown()}>
        {button}
      </Button>
      {dropdownOpen && (
        <DropdownContent>
          {options.map((option, index) => (
            <Option key={index}>{option}</Option>
          ))}
        </DropdownContent>
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;
