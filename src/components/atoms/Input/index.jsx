import React from 'react';
import PropTypes from 'prop-types';

function Input({ placeholder }) {
  return (
    <input
      className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
      placeholder={placeholder}
    />
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default Input;
