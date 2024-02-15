import PropTypes from "prop-types";
import { useMenuContext } from "../Menu.context";
import { Paper } from "@components";

import s from "./MenuDropDown.module.css";
export const MenuDropDown = ({ children }) => {
  const { isOpen } = useMenuContext();
  return (
    <div
      style={{
        display: isOpen ? "block" : "none",
      }}
      className={s.root}
    >
      <Paper>{children}</Paper>
    </div>
  );
};

MenuDropDown.propTypes = {
  children: PropTypes.node.isRequired,
};
