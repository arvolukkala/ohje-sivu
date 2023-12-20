import React from 'react';
import '../Page.css';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Tehtävät
      </h2>
      <p className="texts">
      Pohjatutkimusohjelman tutkimus- ja näytteenottotehtävät organisoidaan tutkimuspisteittäin
projektien alle.<br/>
Itsenäisessä GM Tracker -sovelluksessa tutkimuspisteet, tutkimus- ja näytteenottotehtävät
luodaan käyttäjän toimesta ja ne ovat kaikille käyttäjille näkyviä.
    </p>
    </div>
  );
};

export default Page;
