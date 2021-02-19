import React from "react";
import Small from './Small';
import Medium from './Medium';
import Large from './Large';

const Pizza = props => {
  return (
    <div className="betterview">
      <Small />
      <Medium />
      <Large />
    </div>
  );
};
export default Pizza;
