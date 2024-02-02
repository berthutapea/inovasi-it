import React from 'react';
import './BottomLine.css';

function BottomLine() {
  return (
    <div className="flex items-center justify-center mt-4">
      <div className="side-line" />
      <div className="middle-line">
        <div className="inner-circle" />
      </div>
      <div className="side-line" />
    </div>
  );
}

export default BottomLine;
