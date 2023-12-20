import React from 'react';
import '../Page.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Alkukairauksen tallentaminen
      </h2>
      <h3>
      Alkukairauksen suorittaminen
      </h3>
      <p className="texts">
        <ol>
          <li>Valitse testiajo käyttäjät näkymässä</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Aloita</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Tauko kun alkukairaussyvyys on saavutettu</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Lopeta kairaus</li>
        </ol>
        <h3>
        Alkukairaustiedon tallentaminen
        </h3>
        <ol>
          <li>Aloita tutkimuksen suorittaminen normaalisti</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Tauko kun alkukairaussyvyys on saavutettu</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Alkukairaus</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Alkukairaussyvyys ja alkukairaustapa</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Tallenna</li>
        </ol>
      </p>
    </div>
  );
};

export default Page;
