import React from 'react';
import '../Page.css';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Projektin luonti
      </h2>
      <p className="texts">
      Projekti luodaan projektilista näkymässä.
      <ol>
        <li>Avaa ohjelman päämenu ja valitse Projektilista</li>
        <li>Valitse Lisää uusi projekti</li>
        <li>Syötä työnumero, nimi ja asiakas</li>
        <li>Valitse Tallenna muutokset</li>
      </ol>
Kun projekti on luotu niin se ilmestyy projektilistaan tunnisteella: Työnumero / projektin
nimi
</p>
    </div>
  );
};

export default Page;
