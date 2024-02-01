import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, className, onClick }) {
  return (
    <button
      type="button"
      className={`
        ${className || ''} btn btn-lg
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
