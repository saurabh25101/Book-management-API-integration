 import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ width: "100%", height: "100%" }}
    >
      <RotatingLines
        strokeColor="#0d6efd"      
        strokeWidth="5"
        animationDuration="0.75"
        height="80"
        width="80"
        visible={true}
      />
    </div>
  );
};

export default Loader;
