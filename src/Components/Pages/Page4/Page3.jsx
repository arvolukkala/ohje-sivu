import React from 'react';
import '../Page.css';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
        Näytön kirkkauden säätäminen 
      </h2>
      <p className="texts">
      Voit muuttaa näytön värejä säästääksesi laitteen akkua ja helpottaaksesi sen käyttöä
      hämärässä ja kirkkaassa auringonvalossa.
      <h3>Näytön kirkkauden vähentäminen/lisääminen</h3>
        <ol>
          <li>Avaa laitteen Asetukset-sovellus.</li>
          <li>Valitse Näyttö.</li>
          <li>Valitse Kirkkaustaso ja säädä näytön kirkkautta liukusäätimellä.</li>
        </ol>
        <h3>Yövalon päälle/pois laittaminen</h3>
        <ol>
          <li>Avaa laitteen Asetukset-sovellus.</li>
          <li>Valitse Näyttö.</li>
          <li>Valitse Yövalo.</li>
          <ul>
            <li>Ota yövalo käyttöön / Poista yövalo käytöstä.</li>
          </ul>
        </ol>
      </p>
    </div>
  );
};

export default Page;
