import React from 'react';
import '../Page.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Kellotuksen käynnistäminen ja pysäyttäminen
      </h2>
      <h3>
      Kellotuksen käynnistäminen
      </h3>
      <p className="texts">
        <ol>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Aloita</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Tauko</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Lisää merkintä</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Aloita syötön ajastus</li>
        </ol>
Kellotuksen käynnistäminen aloittaa etenevän laskemisen
<h3>
Kellotuksen pysäyttäminen
</h3>
        <ol>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Tauko</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Lisää kommentti</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Lopeta syötön ajastus</li>
        </ol>
Kellotus tuottaa etenevän infra raporttiin.
    </p>
    </div>
  );
};

export default Page;
