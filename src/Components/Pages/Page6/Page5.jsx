import React from 'react';
import '../Page.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Käyttäjäprofiilin muuttaminen
      </h2>
      <p className="texts">
      Käyttäjäprofiilin tietoja muutetaan käyttäjät-näkymässä.
      <ol>
        <li>Avaa ohjelman päämenu ja valitse Käyttäjät riviltä</li>
        <li>Valitse käyttäjä</li>
        <li>Muuta tiedot</li>
        <li>Valitse <NavigateNextIcon className='mui-icon'/>Valmis</li>
      </ol>
      </p>
    </div>
  );
};

export default Page;
