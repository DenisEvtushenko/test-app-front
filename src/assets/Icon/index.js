import React from 'react';

const Icon = ({ icon, size = 25, color = 'black' }) => {
  return(
    <img
      src={icon}
      style={{
        height: size + 'px',
        width: size + 'px',
        flex: '0 0 '+size+'px',
        color: color,
        fill: color
      }}
      fill={color}
      alt=''
    />
  )
}

export default Icon;
