// import { Children, isValidElement } from "react";

import { MenuProvider } from "./Menu.context";
export { MenuDropDown } from "./MenuDropDown/MenuDropDown.component";
export { MenuTarget } from "./MenuTarget/MenuTarget.component";
import s from "./Menu.module.css";
import PropTypes from "prop-types";

export const Menu = ({ children }) => {
  // Check if there is at least one MenuTarget and one MenuDropdown
  // const hasMenuTarget = Children.toArray(children).some(
  //   (child) => isValidElement(child) && child.type.name === "MenuTarget"
  // );

  // const hasMenuDropdown = Children.toArray(children).some(
  //   (child) => isValidElement(child) && child.type.name === "MenuDropDown"
  // );

  // if (!hasMenuTarget || !hasMenuDropdown) {
  //   console.error(
  //     "Menu component must have at least one MenuTarget and one MenuDropdown"
  //   );
  //   return null;
  // }

  // //  Check if MenuTarget is a child of Menu component
  // const validateMenuTarget = Children.toArray(children).some(
  //   (child) => isValidElement(child) && child.type.name === "MenuTarget"
  // );

  // if (!validateMenuTarget) {
  //   console.error("MenuTarget must be a direct child of Menu component");
  //   return null;
  // }

  return (
    <MenuProvider>
      <div className={s.root}>{children}</div>
    </MenuProvider>
  );
};

Menu.propTypes = {
  children: PropTypes.node.isRequired,
};
