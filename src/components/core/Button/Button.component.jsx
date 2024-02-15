import s from "./Button.module.css";
import { Paper } from "@components";
import PropTypes from "prop-types";

export const Button = ({ children, ...props }) => {
  return (
    <Paper className={s.root} {...props}>
      <div className={s.button}>{children}</div>
    </Paper>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};
