import React from 'react';
import '../Page.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Käyttäjäprofiilin poistaminen 
      </h2>
      <p className="texts">
      Käyttäjäprofiili poistetaan käyttäjät-näkymässä.
        <ol>
          <li>Avaa ohjelman päämenu ja valitse käyttäjät</li>
          <li>Valitse käyttäjä</li>
          <li>Siirry käyttäjän tietojen alareunaan</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Poista käyttäjä</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Poista</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Takaisin</li>
        </ol>
      </p>
    </div>
  );
};

export default Page;
