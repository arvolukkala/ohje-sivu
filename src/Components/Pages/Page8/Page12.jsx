import React from 'react';
import '../Page.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Tutkimuspisteen poistaminen
      </h2>
      <p className="texts">
        <ol>
          <li>Valitse tutkimuspiste Tutkimuspiste-listasta</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Poista piste</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Poista</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Tallenna</li>
        </ol>
      </p>
    </div>
  );
};

export default Page;
