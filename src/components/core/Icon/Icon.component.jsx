// Icon.js
import { useState, useEffect, Suspense } from "react";
import PropTypes from "prop-types";

export const Icon = ({ name = "default" }) => {
  const [icon, setIcon] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const module = await import(`../../../assets/default.svg`);
        setIcon(module.default);
      } catch (err) {
        console.error(`Error loading icon ${name}:`, err);
        setError(true);
      }
    };

    loadIcon();

    // Clean up function
    return () => {
      // Cleanup code if needed
    };
  }, [name]);

  if (error) {
    return <div>Error loading icon</div>;
  }

  if (!icon) {
    return <div>Loading...</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <img src={icon} alt={name} />
    </Suspense>
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};
