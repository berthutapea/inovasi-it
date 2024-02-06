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
  // eslint-disable-next-line react/require-default-props
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
