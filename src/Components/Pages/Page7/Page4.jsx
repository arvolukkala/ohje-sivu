import React from 'react';
import '../Page.css';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Ohjelmistojen välinen yhteys katkeaa
      </h2>
      <p className="texts">
      Kun kone- ja tallennin ohjelmiston välinen yhteys katkeaa niin oikeaan yläkulmaan ilmestyy
teksti: Yhteys koneeseen poikki.<br/>
Kun ohjelmistojen välinen yhteys muodostuu uudelleen teksti poistuu.
      </p>
    </div>
  );
};

export default Page;
