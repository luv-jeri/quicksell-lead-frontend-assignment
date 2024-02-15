import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const DefaultIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm10 8c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm.707-10.707a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414L12 10.414l-1.293 1.293a1 1 0 0 1-1.414-1.414l2-2zM11 11v-1h2v1h-2z"
      fill="currentColor"
    />
  </svg>
);

export const Icon = ({ name, size, color, style }) => {
  const [iconComponent, setIconComponent] = useState(null);

  useEffect(() => {
    const importIcon = async () => {
      try {
        const { default: IconComponent } = await import(
          `../../../assets/${name}.svg?react`
        );
        setIconComponent(<IconComponent />);
      } catch (error) {
        console.error(`Error loading icon: ${name}`, error);
        setIconComponent(<DefaultIcon />);
      }
    };

    importIcon();
  }, [name]);

  return (
    <div style={{ width: size, height: size, color, ...style }}>
      {iconComponent &&
        React.cloneElement(iconComponent, {
          fill: color,
          height: size,
          width: size,
        })}
    </div>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.object,
};

Icon.defaultProps = {
  size: 14,
  color: "currentColor",
  style: {},
};
