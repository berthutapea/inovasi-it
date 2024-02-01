import React from 'react';
import PropTypes from 'prop-types';

function TextArea({ placeholder }) {
  return (
    <textarea
      className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
      placeholder={placeholder}
    />
  );
}

TextArea.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default TextArea;
