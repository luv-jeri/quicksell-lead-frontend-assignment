import PropTypes from "prop-types";
import s from "./Spacer.module.css";
export const Spacer = ({ direction = "V", amount = "m", styles }) => {
  let spacerStyle = {
    ...styles,
  };

  // Set spacing based on direction and amount
  if (direction === "H") {
    spacerStyle.marginRight = getSpaceValue(amount);
  } else if (direction === "V") {
    spacerStyle.height = getSpaceValue(amount);
  }

  return <div style={spacerStyle} className={s.spacer} />;
};

// Helper function to get space value based on size
const getSpaceValue = (size) => {
  switch (size) {
    case "xs":
      return "4px";
    case "s":
      return "8px";
    case "m":
      return "16px";
    case "l":
      return "24px";
    case "lg":
      return "32px";
    case "xl":
      return "40px";
    default:
      return "16px"; // Default to medium if size is invalid
  }
};

Spacer.propTypes = {
  direction: PropTypes.oneOf(["H", "V"]).isRequired,
  amount: PropTypes.oneOf(["xs", "s", "m", "l", "lg", "xl"]).isRequired,
  styles: PropTypes.object,
};
