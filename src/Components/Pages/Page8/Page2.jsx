import React from 'react';
import '../Page.css';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Projektit
      </h2>
      <p className="texts">
      Pohjatutkimusohjelman mukaiset kenttätutkimustyöt organisoidaan projektin avulla yhteen
kuuluvaksi kokonaisuudeksi.<br/>
Itsenäisessä GM Tracker -sovelluksessa projekti luodaan käyttäjän toimesta. Kaikki projektit
näkyvät kaikille sovelluksen käyttäjille. 
</p>
    </div>
  );
};

export default Page;
