import React from 'react';
import '../Page.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
        Sovelluksen aktivointi tuoteavaimella
      </h2>
      <p className="texts">
      Aktivointi tehdään Asetukset-näkymässä tuoteavainta käyttäen.
        <ol>
          <li>Avaa ohjelman päämenu ja valitse <NavigateNextIcon className='mui-icon'/>
          Asetukset</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Lisenssin hallinta</li>
          <li>Syötä lisenssiavain</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>
          Aktivoi lisenssi.</li>
          <li>Lisenssi on aktivoitu teksti ilmestyy näytölle. </li>
        </ol>
      </p>
    </div>
  );
};

export default Page;
