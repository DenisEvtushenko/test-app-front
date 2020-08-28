import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../assets/Header';
import Row from '../assets/Row';

import '../styles/Page.css';

function Page({ getElements, title })  {
  let [mockJSON, getMockJSON] = useState([]);
  let arr = ['#', 'name', 'date', 'genre', 'rating'];

  useEffect(() => {
    if (!mockJSON.length) {
      axios.get(`http://localhost:1234/${getElements}`)
      .then(res => {
        getMockJSON(res.data)
      })
      .catch(err => {
        console.log('err', err)
      })
    }
  })
  return(
      <div className='series' >
        <Header title={title} />
        <div className='series_body'>
          <div className='column_header'>
            {arr.map((i, idx) => (
              <div key={idx} className={`col ${i === '#' ? 'index' : null}`}>
                <span>{i}</span>
              </div>
            ))}
          </div>
          <div className='column_wrapper'>
            {mockJSON.map((i, idx) => {
              if (i.releaseYear < 2010) return null;
              if (i.id > 21) return null;
              return (
              <Row key={idx} item={i} />
            )})
            }
          </div>
        </div>
      </div>
  );
};

export default Page;