import s from "./Paper.module.css";
import PropTypes from "prop-types";

export const Paper = ({
  height = "auto",
  width = "auto",
  elevation = 1,
  radius = 5,
  children = null,
  style = {},
  className = "",
  ...rest
}) => {
  return (
    <div
      className={`${s.paper} ${className}`}
      style={{
        height,
        width,
        boxShadow: `0px ${elevation}px ${elevation * 2}px rgba(0, 0, 0, 0.1)`,
        borderRadius: radius,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

Paper.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  elevation: PropTypes.number,
  radius: PropTypes.number,
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
};
