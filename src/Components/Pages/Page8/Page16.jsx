import React from 'react';
import '../Page.css';
import CropFreeSharpIcon from '@mui/icons-material/CropFreeSharp';
import FullscreenExitSharpIcon from '@mui/icons-material/FullscreenExitSharp';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
        Kartan kokonäyttötila
      </h2>
      <p className="texts">
        Voit siirtyä kartan kokonäyttötilaan oikean alareunan <CropFreeSharpIcon className='mui-icon'/> napilla. Kokonäyttötilasta
        poistutaan <FullscreenExitSharpIcon className='mui-icon'/> napilla.
      </p>
    </div>
  );
};

export default Page;
