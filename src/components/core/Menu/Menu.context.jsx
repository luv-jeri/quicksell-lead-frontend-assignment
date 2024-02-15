import {
  useContext,
  useState,
  createContext,
  useCallback,
  useMemo,
  useRef,
  useEffect,
} from "react";

import PropTypes from "prop-types";

const MenuContext = createContext();

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("Please Wrap MenuTarget/MenuDropDown with Menu Component");
  }
  return context;
};

export const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const value = useMemo(
    () => ({ isOpen, setIsOpen, close, toggle }),
    [isOpen, setIsOpen, close, toggle]
  );

  return (
    <MenuContext.Provider value={value}>
      <div ref={menuRef}> {children}</div>
    </MenuContext.Provider>
  );
};

MenuProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
