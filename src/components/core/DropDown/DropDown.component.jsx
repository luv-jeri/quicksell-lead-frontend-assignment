import { useState, useEffect, useRef } from "react";
import styles from "./DownDown.module.css";
import PropTypes from "prop-types";
import { Icon } from "@components";

export const DropDown = ({ options, onSelect, selected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(() => {
    return options.find((option) => option.value === selected) || options[0];
  });
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles["dropdown"]} ref={dropdownRef}>
      <div className={styles["selected-option"]} onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : "Select an option"}{" "}
        <Icon
          name="arrow"
          style={{
            transform: isOpen
              ? "rotate(270deg)"
              : "rotate(90deg)" + " translateX(-0.1rem)",
            transition : "transform 0.3s ease",
          }}
        />
      </div>
      {isOpen && (
        <div className={styles.options}>
          {options.map((option) => (
            <>
              <div
                key={option.value}
                className={styles.option}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

DropDown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.string,
};
