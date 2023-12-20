import React from 'react';
import '../Page.css';
import nappi from './nappi.jpg'

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Käyttäjäprofiilin passivointi 
      </h2>
      <p className="texts">
      <ol>
        <li>Valitse <img src={nappi} alt='harmaa nappi'></img> ohjelman oikeasta yläreunasta.</li>
        <li>Valitse aktiivinen käyttäjäprofiili</li>
      </ol>
Käyttäjänprofiilin passivointi lukitsee tutkimustehtävien hallinnan sekä tutkimusten ja
näytteenottojen suorittamisen toiminteet 
      </p>
    </div>
  );
};

export default Page;
