import React from 'react';
import '../Page.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Tehtävän muuttaminen
      </h2>
      <p className="texts">
        <ol>
          <li>Valitse tutkimuspiste Tutkimuspiste-listasta</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Muokkaa projektia</li>
          <li>Vaihda menetemä</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Tallenna muutokset</li>
        </ol>
      </p>
    </div>
  );
};

export default Page;
