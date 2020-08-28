import React from 'react';
import moment from 'moment';
import poster from '../images/poster.png';

import '../../styles/Row.css'

const Row = ({item}) => {
  return(
    <div className='column_row' key={`series-${item.id}`}>
      <div className='col index'>
        <span>{item.id}</span>
      </div>
      <div className='col' style={{ display: 'flex', flexDirection: 'column' }}>
        <span>{item.name}</span>
        <div>
          <img height={100} src={poster} alt='' />
        </div>
      </div>
      <div className='col'>
        <span>{moment(item.date).format('DD MMM YYYY')}</span>
      </div>
      <div className='col'>
        <span>{item.genre}</span>
      </div>
      <div className='col'>
        <span>{Math.round(Math.random() * 10) || 1}</span>
      </div>
    </div>
  );
};

export default Row;