import s from "./Button.module.css";
import { Paper } from "@components";
import PropTypes from "prop-types";

export const Button = ({ children, className, onClick, ...props }) => {
  return (
    <Paper className={s.root} {...props} onClick={onClick}>
      <div className={`${s.button} ${className}`}>{children}</div>
    </Paper>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
