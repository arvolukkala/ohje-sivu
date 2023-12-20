import React from 'react';
import '../Page.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
        Aktivointitilan tarkistaminen
      </h2>
      <p className="texts">
      Aktivointitila tarkistetaan Asetukset-näkymässä.
        <ol>
          <li>Avaa ohjelman päämenu ja valitse <NavigateNextIcon className='mui-icon'/>
          Asetukset</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>
          Lisenssin hallinta</li>
          <li>Jos oikeassa reunassa lukee Lisenssiä ei ole aktivoitu siirry kohtaan Sovelluksen
          aktivointi tuoteavaimella</li>
        </ol>
      </p>
    </div>
  );
};

export default Page;
