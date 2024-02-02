import React from 'react';
import PropTypes from 'prop-types';
import './SecondaryBtn.css';

function SecondaryBtn({ children, className, onClick }) {
  return (
    <button
      type="button"
      className={`
        ${className || ''} secondary-button
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

SecondaryBtn.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SecondaryBtn;
