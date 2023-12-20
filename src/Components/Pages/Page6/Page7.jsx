import React from 'react';
import '../Page.css';
import nappi from './nappi.jpg'

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Käyttäjäprofiilin aktivointi
      </h2>
      <p className="texts">
      Käyttäjäprofiili aktivoidaan käyttäjät-näkymässä.
      <ol>
        <li>Avaa ohjelman päämenu ja valitse käyttäjät. Vaihtoehtoisesti valitse <img src={nappi} alt='harmaa nappi'></img> ohjelman
oikeasta yläreunasta</li>
        <li>Valitse käyttäjäprofiili</li>
      </ol>
Ohjelma siirtyy projektilistaan profiilin valinnan jälkeen. Jos profiilissa on määritelty
nimilyhenne se näkyy oikeassa yläkulmassa.<br/><br/>
Käyttäjänprofiilin aktivointi vapauttaa tutkimustehtävien hallinnan sekä tutkimusten ja
näytteenottojen suorittamisen toiminteet 

      </p>
    </div>
  );
};

export default Page;
