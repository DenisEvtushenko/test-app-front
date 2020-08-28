import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon';
import backImg from '../images/back.svg';
import '../../styles/Header.css';

const Header = ({ title }) => {
  return (
    <div className='series_header'>
      <Link to='/'>
        <div>
          <Icon size={30} icon={backImg} />
        </div>
      </Link>
      <h1>{title}</h1>
    </div>
  )
};

export default Header;