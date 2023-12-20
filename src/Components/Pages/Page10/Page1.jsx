import React from 'react';
import '../Page.css';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Datan tallentaminen
      </h2>
      <p className="texts">
      GM Tracker tallentaa sensoreiden, komponenttien ja käyttäjän tuottamia havaintoja
työnaikaisista tapahtumista, työkoneen toiminnasta ja moottorin tilasta.
    </p>
    </div>
  );
};

export default Page;
