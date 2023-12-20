import React from 'react';
import '../Page.css';
import MenuIcon from '@mui/icons-material/Menu';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
        Testiajon käynnistäminen
      </h2>
      <p className="texts">
        <ol>
          <li>Avaa ohjelman päämenu <MenuIcon className='mui-icon'/> ja valitse Testiajo</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/> Aloita</li>
        </ol>
      </p>
    </div>
  );
};

export default Page;
