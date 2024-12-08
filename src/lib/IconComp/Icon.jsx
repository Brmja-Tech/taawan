import React from 'react';
import icons from './icons';

const Icon = ({ name, size = 24, className = '' }) => {
  const IconComponent = icons[name];

  return (
    <IconComponent
      width={size}
      height={size}
      className={className}  
    />
  );
};

export default Icon;
