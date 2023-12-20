import React from 'react';
import '../Page.css';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Kartan zoomaus
      </h2>
      <p className="texts">
      Voit zoomata karttaa painamalla oikean alareunan +/- toimintonappeja tai vetämällä kahta
sormea ylös- tai alaspäin näytöllä.
      </p>
    </div>
  );
};

export default Page;
