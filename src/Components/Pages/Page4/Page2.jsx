import React from 'react';
import '../Page.css';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
        Näytön lukitus
      </h2>
      <p className="texts">
      Voit lisätä näytön lukituksen, joka suojelee Android-tablettiasi. Tällöin sinua pyydetään avaamaan
      laitteen lukitus esimerkiksi PIN-koodilla, kuviolla tai salasanalla aina, kun käynnistät laitteen tai
      aktivoit näytön.

      <h3>Näytön lukituksen asettaminen</h3>
      <ul>
        <li>Avaa laitteen Asetukset-sovellus.</li>
        <li>Valitse Suojaus.</li>
        <li>Valitse näytön lukitustapa valitsemalla Näytön lukitus.</li>
          <ul>
            <li>Jos olet jo määrittänyt näytön lukituksen, sinun täytyy syöttää PIN-koodi, kuvio
            tai salasana ennen lukitustavan vaihtamista.</li>
          </ul>
        <li>Valitse haluamasi näytön lukitustapa. Seuraa näytön ohjeita.</li>
      </ul>

      <p>Näytön lukitusvaihtoehdot<br/>
      Ei lukitusta</p>
      <ul>
        <ul>
          <li>Ei mitään: Laitetta ei lukita. Tämä ei paranna laitteen suojausta, mutta nopeuttaa
          aloitusnäytön avaamista.</li>
          <li>Pyyhkäisy: Pyyhkäise laitteen näyttöä sormellasi. Tämä ei paranna laitteen suojausta,
          mutta nopeuttaa aloitusnäytön avaamista.</li>
        </ul>
      </ul>
      <p>Vakiolukitustavat</p>
      <ul>
        <ul>
          <li>Kuvio: Piirrä yksinkertainen kuvio sormellasi.</li>
          <li>PIN-koodi: Lisää koodi, jonka pituus on vähintään neljä numeroa. Pidemmät PIN-koodit
          ovat yleensä turvallisempia.</li>
          <li>Salasana: Lisää salasana, jossa on vähintään neljä kirjainta tai numeroa. Vahva salasana
          on kaikkein turvallisin lukitustapa. </li>
        </ul>
      </ul>
      </p>
    </div>
  );
};

export default Page;
