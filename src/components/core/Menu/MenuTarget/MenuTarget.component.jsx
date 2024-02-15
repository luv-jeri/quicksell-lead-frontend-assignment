import { useMenuContext } from "../Menu.context";
import PropTypes from "prop-types";
import s from "./MenuTarget.module.css";

export const MenuTarget = ({ children }) => {
  const { toggle } = useMenuContext();
  return <div className={s.root} onClick={() => toggle()}>{children}</div>;
};

MenuTarget.propTypes = {
  children: PropTypes.node.isRequired,
};
