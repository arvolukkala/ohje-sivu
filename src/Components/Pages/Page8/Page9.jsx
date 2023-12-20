import React from 'react';
import '../Page.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Tehtävän linjatiedot 
      </h2>
      <p className="texts">
      Pisteelle voidaan määritellä linjatiedot jos koordinaattitietoja ei ole käytettävissä.
Syöttämällä linjatiedot automatisoit siirtotiedoston muodostamisen työnkulkua.
<br/>
Linjan nimi tai numero tulee automaattisesti siirtotiedoston LN riville Linjan nimi tai nro -
kenttään, paalu Paalu -kenttään ja etäisyys Etäisyys -kenttään. LN riviä ei tulosteta, jos
tietoja ei ole annettu.<br/>
esim. LN 21 560.00 -4.00
        <ol>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Valise lisää uusi piste</li>
          <li>Syötä tutkimuspisteen tunniste, linjan nimi tai numero, paalu ja etäisyys.</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Tallenna muutokset</li>
        </ol>
      </p>
    </div>
  );
};

export default Page;
