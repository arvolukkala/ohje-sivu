import React from 'react';
import '../Page.css';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Projektin koordinaatti- ja korkeusjärjestelmätiedot
      </h2>
      <p className="texts">
        Projektin luonnin yhteydessä projektille voidaan syöttää koordinaatti- ja 
        korkeusjärjestelmä.<br/><br/>
        Syöttämällä tiedot automatisoit siirtotiedoston muodostamisen työnkulkua ja saat
        tutkimuspisteet näkyviin kartalla.<br/>
        Koordinaattijärjestelmä tulee automaattisesti siirtotiedoston KJ riville Koordinaatisto -
        kenttään ja Koordinaattijärjestelmä Korkeusjärjestelmä -kenttään. Mittausjärjestelmä rivi
        tulostuu siirtotiedostoon tyhjillä arvoilla, jos tietoja ei ole annettu.<br/>
        esim. KJ ETRS-GK22 N2000<br/><br/>
        Koordinaattijärjestelmätieto on pakollinen tutkimuspisteiden näyttämiseksi kartalla.
        Tutkimuspisteet eivät näy kartalla, jos koordinaattijärjestelmä on määrittelemätön tai väärä.
      </p>
    </div>
  );
};

export default Page;
