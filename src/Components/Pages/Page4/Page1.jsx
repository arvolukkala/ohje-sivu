import React from 'react';
import '../Page.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Page = () => {
  return (
    <div className='text-container'>

      <h2 className='otsikko'>
        lokaalit käyttäjäprofiilit
      </h2>

      <p className="texts">
      Voit halutessasi luoda jokaiselle käyttäjälle oman käyttäjäprofiilin. Kullakin käyttäjäprofiililla on
      laitteessa oma tila yksilöityjä aloitusnäyttöjä, tilejä, sovelluksia, asetuksia ja muita tietoja varten.
      Käyttäjän lisääminen

      <h3>Käyttäjän lisääminen</h3>  
        <ol>
          <li>Avaa laitteen Asetukset-sovellus.</li>
          <li>Valitse Järjestelmä Useita käyttäjiä.</li>
            <ul>
              <li>Jos et löydä kyseistä asetusta, kokeile etsiä Asetukset-sovelluksesta käyttäjät.</li>
            </ul>
          <li>Valitse Lisää käyttäjä OK.</li>
            <ul>
              <li>Jos et löydä Lisää käyttäjä -kohtaa, valitse Lisää käyttäjä tai
              profiili <NavigateNextIcon className='mui-icon'/>Käyttäjä <NavigateNextIcon className='mui-icon'/>OK.</li>
              <li>Jos et löydä kumpaakaan vaihtoehtoa, laitteellesi ei voi lisätä käyttäjiä.
              Käyttäjän päivittäminen</li>
            </ul>
        </ol>
      
      <h3>Käyttäjän päivittäminen</h3>
        <ol>
          <li>Avaa laitteen Asetukset-sovellus.</li>
          <li>Valitse Järjestelmä <NavigateNextIcon className='mui-icon'/>Useita käyttäjiä.</li>
            <ul>
              <li>Jos et löydä kyseistä asetusta, kokeile etsiä Asetukset-sovelluksesta käyttäjät.</li>
            </ul>
          <li>Valitse nimesi.</li>
            <ul>
              <li>Jos haluat vaihtaa profiilinimesi, kirjoita uusi nimi ja valitse sitten OK.</li>
              <li>Jos haluat vaihtaa profiilikuvasi, kosketa kuvaasi ja ota uusi kuva tai valitse
              olemassa oleva kuva laitteelta.   </li>
            </ul>
        </ol>

        <h3>Käyttäjän poistaminen</h3>
        <p>
        Jos olet laitteen omistaja</p>
        <ul>
          <li>Avaa laitteen Asetukset-sovellus. </li>
          <li>Valitse Järjestelmä <NavigateNextIcon className='mui-icon'/>Useita käyttäjiä</li>
            <ul>
              <li>Jos et löydä kyseistä asetusta, kokeile etsiä Asetukset-sovelluksesta käyttäjät</li>
            </ul>
          <li>Valitse käyttäjän nimen vierestä <NavigateNextIcon className='mui-icon'/>Asetukset Poista käyttäjä. Käyttäjä poistetaan
          listalta. </li>
        </ul>

        <p>Jos olet käyttäjä, joka ei ole laitteen omistaja</p>
        <ul>
          <li>Avaa laitteen Asetukset-sovellus.</li>
          <li>Valitse Järjestelmä <NavigateNextIcon className='mui-icon'/>Useita käyttäjiä.</li>
            <ul>
              <li>Jos et löydä kyseistä asetusta, kokeile etsiä Asetukset-sovelluksesta käyttäjät. </li>
            </ul>
          <li>Valitse Lisää.</li>
          <li>Valitse Poista [käyttäjänimi] tältä laitteelta.
            Tärkeää: Tätä toimintoa ei voi kumota.</li>
          <li>Laite siirtyy omistajan profiiliin.</li>
        </ul>


      </p>
    </div>
  );
};

export default Page;
