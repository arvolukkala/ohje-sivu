import React from 'react';
import '../Page.css';
import MenuIcon from '@mui/icons-material/Menu';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>Tuki</h2>
      <p className="texts">
        Voit lähettää palautetta GM Tracker tukee palaute toiminteella.
        <ol>
          <li>
            Avaa ohjelman päämenu <MenuIcon className='mui-icon' /> ja valitse
            <NavigateNextIcon className='mui-icon' /> Asetukset
          </li>
          <li>
            Valitse <NavigateNextIcon className='mui-icon' /> Jätä palautetta
          </li>
          <li>Syötä haluamasi palaute</li>
          <li>
            Valitse <NavigateNextIcon className='mui-icon' /> Lähetä
          </li>
        </ol>
      </p>
    </div>
  );
};

export default Page;