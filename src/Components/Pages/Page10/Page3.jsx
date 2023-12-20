import React from 'react';
import '../Page.css';
import MenuIcon from '@mui/icons-material/Menu';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import nayte from './nayte.jpg'
import { Menu } from '@mui/material';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Näytteenottodatan tallentaminen
      </h2>
      <p className="texts">
      Näytteenottodatan tallentaminen aloitetaan Kairaus-näkymässä.
        <ol>
          <li>Avaa ohjelman päämenu <MenuIcon className='mui-icon'/> ja valitse Projektilista.</li>
          <li>Valitse tutkimuspiste</li>
          <li>Valitse näytteenotto</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Aloita</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Tauko</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Aloita näytteenotto</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Jatka</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Tauko</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Lopeta näytteenotto</li>
          <li>Syötä näytteen tunniste</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Lopeta</li>
          <li>Tarkista näytteenottodata</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Valmis</li>
        </ol>
Näytteenottotehtävän keltainen väri indikoi että näytteenottodataa ei ole vielä lähetetty
eteenpäin.<br/>
<img src={nayte}/>
    </p>
    </div>
  );
};

export default Page;
