import React from 'react';
import '../Page.css';
import nappi from './nappi.jpg'

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Aktiivisen käyttäjäprofiilin tarkistaminen 
      </h2>
      <p className="texts">
        <ol>
          <li>Valitse <img src={nappi} alt='harmaa nappi' /> ohjelman oikeasta yläreunasta.</li>
        </ol>
      <br/>
      Aktiivisen käyttäjäprofiilin tunnistaa käyttäjäkortin oikean yläreunassa vihreästä ympyrästä.
      </p>
    </div>
  );
};

export default Page;
