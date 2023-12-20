import React from 'react';
import '../Page.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Vasaroinnin käynnistäminen ja pysäyttäminen
      </h2>
      <h3>
      Vasaroinnin käynnistäminen
      </h3>
      <p className="texts">
        <ol>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Aloita</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Tauko</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Lisää merkintä</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Aloita vasarointi</li>
        </ol>
        <h3>
        Vasaroinnin pysäyttäminen
        </h3>
        <ol>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Tauko</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Lisää kommentti</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Lopeta vasarointi</li>
        </ol>
        Vasarointi tulee näkyviin infra raporttiin. 
      </p>
    </div>
  );
};

export default Page;
