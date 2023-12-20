import React from 'react';
import '../Page.css';
import MenuIcon from '@mui/icons-material/Menu';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Page = () => {
  return (
    <div className='text-container'>
        <h2 className='otsikko'>
          Datan lähetys projektilistasta
        </h2>
        <h3>Kaikkien tutkimuspisteiden datojen lähetys</h3>
        <p className="texts">
          <ol>
            <li>Avaa ohjelman päämenu <MenuIcon className='mui-icon'/> ja valitse Projektilista.</li>
            <li>Vaitse projekti</li>
            <li>Valitse tutkimuspiste</li>
            <li>Valitse näytteenotto</li>
            <li>Valitse <NavigateNextIcon className='mui-icon'/>Aloita</li>
          </ol>
          <h3>
          Yhden tutkimus- tai näytteenottotehtävän datan lähetys
        </h3>
      </p>
    </div>
  );
};

export default Page;
