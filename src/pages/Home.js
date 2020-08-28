import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home()  {
  let tiles = ['Series', 'Movies']
  return(
      <div className='home' >
          {tiles.map((i, idx) => (
              <Link key={idx} className='tile text' to={`/${i.toLowerCase()}`}>
                  <h1>{i}</h1>
              </Link>
          ))
          }
      </div>
  );
};

export default Home;