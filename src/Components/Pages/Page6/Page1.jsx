import React from 'react';
import '../Page.css';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Käyttäjätili
      </h2>
      <p className="texts">
      Itsenäisessä tallenninsovelluksessa ei ole käyttäjätilejä. Kaikki käyttäjät näkevät kaikki
kerätyt ja tuotetut tiedot.
Tiedot on suojattava laitteen omilla turvatoimilla.
      </p>
    </div>
  );
};

export default Page;
