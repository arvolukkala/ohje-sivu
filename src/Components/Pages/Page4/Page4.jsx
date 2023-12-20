import React from 'react';
import '../Page.css';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
        Näytön taustan muuttaminen tummaksi 
      </h2>
      <p className="texts">
      Voit muuttaa näytön taustan tummaksi käyttämällä tummaa teemaa tai käänteisiä värejä.
Käänteiset värit vaikuttaa kaikkeen laitteen sisältöön, myös mediaan. Esimerkiksi musta
teksti valkoisella taustalla muuttuu valkoiseksi tekstiksi mustalla taustalla. Värien laatu tai
selkeys voi kärsiä.
<h3>Tumman teeman päälle laittaminen</h3>
<ol>
  <li>Avaa laitteen Asetukset-sovellus.</li>
  <li>Valitse Lisätiedot.</li>
  <li>Laita Laitteen Teema-kohdasta päälle Tumma teema.</li>
</ol>
<h3>Käänteisten värien päälle/pois laittaminen</h3>
<ol>
  <li>Avaa laitteen Asetukset-sovellus.</li>
  <li>Napauta Esteettömyys.</li>
  <li>Valitse Näyttö-kohdasta Käänteiset värit.</li>
  <li>Laita päälle Käytä käänteisiä värejä.</li>
</ol>
      </p>
    </div>
  );
};

export default Page;
