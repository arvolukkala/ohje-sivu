import React from 'react';
import '../Page.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Tehtävän koordinaattitiedot
      </h2>
      <p className="texts">
      Tehtävä luonnin yhteydessä tutkimuspisteelle voidaan syöttää leveys- (X) ja pituus
koordinaatit (Y) sekä korkeus merenpinnasta (Z).
Syöttämällä koordinaatit ja korkeuden automatisoit siirtotiedoston muodostamisen
työnkulkua ja saat tutkimuspisteet näkyviin kartalla.
Leveys koordinaatti tulee automaattisesti siirtotiedoston XY riville X -kenttään, pituus
koordinaatti Y-kenttään ja korkeus merenpinnasta F-kenttään. Koordinaattitiedot (XY) rivi
tulostuu siirtotiedostoon tyhjillä arvoilla, jos tietoja ei ole annettu.
esim. XY 6798905.01 22508751.98 32.757 30042020 1 
<h3>
Koordinaattien syöttäminen paikantamalla
</h3>
<ol>
  <li>Valitse <NavigateNextIcon className='mui-icon'/>Valise lisää uusi piste</li>
  <li>Syötä tutkimuspisteen tunniste</li>
  <li>Valitse <NavigateNextIcon className='mui-icon'/>Sijoita kartalle</li>
  <li>Siirrä paikannusristikko haluamaasi kohtaan</li>
  <li>Valitse <NavigateNextIcon className='mui-icon'/>Lisää tähän sijainti</li>
  <li>Valitse <NavigateNextIcon className='mui-icon'/>Tallenna muutokset</li>
</ol>

Valitsemalla <NavigateNextIcon className='mui-icon'/>Näytä kartalla saat tutkimuspisteen kartalla näkyville.
<br/><br/>
Tutkimuspisteen sijainti kartalla indikoidaan karttaosoittimen avulla. Tutkimuspisteellä
suoritettavan tutkimus- ja/tai näytteenottotehtävän symboli on osoittimen sisällä. 

      </p>
    </div>
  );
};

export default Page;
