import React from 'react';
import Icon from '../Icon';
import images from '../images'
import '../../styles/Footer.css';

function Footer()  {
  const icons = ['vk', 'inst', 'telegram', 'fb'];
  return (
    <div className='footer'>
      <div className='icon_wrapper'>
        {icons.map((i, idx) => (
          <Icon key={idx} icon={images[i]} />
        ))
        }
      </div>
    </div>
  );
};

export default Footer;