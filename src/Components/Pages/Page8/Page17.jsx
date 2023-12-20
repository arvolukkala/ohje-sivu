import React from 'react';
import '../Page.css';
import RadioButtonCheckedRoundedIcon from '@mui/icons-material/RadioButtonCheckedRounded';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Oma sijainti kartalla
      </h2>
      <p className="texts">
      Oma sijainti kartalla näkyy sinisenä pallona.

      Omaan sijaintiin pääset painamalla <RadioButtonCheckedRoundedIcon className='mui-icon'/>-nappia. Projektin sijaintiin pääset takaisin
painamalla kartan yläreunassa olevaa keltaista paikannusosoitinta. 

      </p>
    </div>
  );
};

export default Page;
