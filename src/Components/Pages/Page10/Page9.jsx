import React from 'react';
import '../Page.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Kommentointi
      </h2>
      <h3>
      Vapaatekstikommentointi
      </h3>
      <p className="texts">
        <ol>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Tauko</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Lisää merkintä</li>
          <li>Syötä kommentti</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>TX / HT / HM</li>
        </ol>
      <h3>
      Pikakommentointi
      </h3>
        <ol>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Tauko</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Pikakommentti</li>
        </ol>
        Kommentit tulevat infra raporttiin näkyviin.
      </p>
    </div>
  );
};

export default Page;
