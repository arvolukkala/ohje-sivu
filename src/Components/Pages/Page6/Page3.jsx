import React from 'react';
import '../Page.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Käyttäjäprofiilin luonti
      </h2>
      <p className="texts">
      Käyttäjäprofiili luodaan käyttäjät-näkymässä.
        <ol>
          <li>Avaa ohjelman päämenu ja valitse käyttäjät</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Lisää käyttäjä</li>
          <li>Syötä käyttäjän etunimi ja sukunimi</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Luo uusi</li>
        </ol>
      </p>
    </div>
  );
};

export default Page;
