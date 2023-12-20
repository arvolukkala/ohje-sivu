import React from 'react';
import '../Page.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Projektin muuttaminen
      </h2>
      <p className="texts">
      Projektin tietoja muutetaan Projektilista-näkymässä.
      <ol>
        <li>Valitse projekti projektilistasta</li>
        <li>Valitse <NavigateNextIcon className='mui-icon'/>Muokkaa projektia</li>
        <li>Syötä tiedot</li>
        <li>Valitse <NavigateNextIcon className='mui-icon'/>Tallenna muutokset</li>
      </ol>
    </p>
    </div>
  );
};

export default Page;
