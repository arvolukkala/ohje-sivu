import React from 'react';
import '../Page.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import diagrammi from './diagrammi.jpg'
import mittari from './mittari.jpg'

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Kairaus-näkymän kustomointi
        </h2>
        <h3>
        Mittarin vaihtaminen
        </h3>
        <p className="texts">
        Mittarin voi muuttaa Kairaus-näkymässä
        <ol>
          <li>Valitse mittari</li>
          <li>Valitse mittarityyppi <NavigateNextIcon className='mui-icon'/>Kairaus tai Vaunu</li>
          <li>Valitse korvaava mittari </li>
        </ol>
        <h3>
        Trendigraafin esitystavan vaihtaminen
        </h3>
        Trendigraafin esitystapaa voi muuttaa Kairaus-näkymässä
        <ol>
          <li>Paina <img src={diagrammi} alt="kairausdiagrammi"></img> kun haluat nähdä kairausdiagrammin</li>
          <li>Paina <img src={mittari} alt="mittaritrendit"></img> kun haluat nähdä yksittäiset mittaritrendit</li>
        </ol>
      </p>
    </div>
  );
};

export default Page;
