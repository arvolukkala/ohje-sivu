import React from 'react';
import '../Page.css';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Tiedonsiirtotilan tarkistaminen 
      </h2>
      <p className="texts">
      Aktivointitila tarkistetaan Asetukset-näkymässä.<br/><br/>
Yhteys kone- ja tallennin ohjelmiston välillä on aktiivinen, kun Käyttäjät näkymässä näkyy
koneen sarjanumero.
      </p>
    </div>
  );
};

export default Page;
