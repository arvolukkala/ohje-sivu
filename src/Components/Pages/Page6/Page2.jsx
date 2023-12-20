import React from 'react';
import '../Page.css';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Käyttäjäprofiili
      </h2>
      <p className="texts">
      Tallennin voidaan jakaa useamman työntekijän kesken luomalla sovellukseen jokaiselle
käyttäjälle oma käyttäjäprofiili. Kullakin käyttäjäprofiililla on oma tila yksilöityjä asetuksia
varten.
Tutkimustehtävien hallintaan sekä tutkimusten ja näytteenottojen suorittamiseen ei pääse
kiinni ilman profiilin luontiaja valintaa. 
      </p>
    </div>
  );
};

export default Page;
