import React from 'react';
import '../Page.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
        Testiajon lopettaminen
      </h2>
      <p className="texts">
        <ol>
          <li>Valitse <NavigateNextIcon className='mui-icon'/> Aloita</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/> Tauko</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/> Lopeta kairaus </li>
        </ol>
      </p>
    </div>
  );
};

export default Page;
