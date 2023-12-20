import React from 'react';
import '../Page.css';
import MenuIcon from '@mui/icons-material/Menu';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Datan lähetys tallennuksen lopetus näkymästä
      </h2>
      <h3>
      Datan lähetys heti tehtävän suorittamisen jälkeen
      </h3>
      <p className="texts">
        <ol>
          <li>Valitse lähetä raportti</li>
          <li>Kirjoita sähköpostin sisältö</li>
          <li>Lähetä sähköposti</li>
        </ol>
        Tehtävä muuttuu vihreäksi kun data on lähetetty eteenpäin.
      <h3>
        Datan lähetys tehtävien suorittamisen jälkeen 
      </h3>
        <ol>
          <li>Avaa ohjelman päämenu <MenuIcon className='mui-icon'/> ja valitse Projektilista.</li>
          <li>Vaitse projekti</li>
          <li>Valitse tutkimuspiste</li>
          <li>Valitse tutkimus- tai näytteenottotehtävä</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Lähetä raportti</li>
          <li>Kirjoita sähköpostin sisältö</li>
          <li>Lähetä sähköposti</li>
        </ol>
          Tehtävä muuttuu vihreäksi kun data on lähetetty eteenpäin.
      </p>
    </div>
  );
};

export default Page;
