import React from 'react';
import '../Page.css';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Projektin työt kartalla 
      </h2>
      <p className="texts">
      Tutkimuspisteet töineen näytetään Projektislista -näkymän oikealla puolella. 
        <h3>
        Siirtyminen projektin tiedoista karttanäkymään
        </h3>
      Voit siirtyä projektin tiedoista karttanäkymään valitsemalla projekti projektilistasta. 
        <h3>
        Siirtyminen tehtävälistauksesta karttanäkymään 
        </h3>
        Voit siirtyä tehtävälistauksesta karttanäkymään valitsemalla tutkimuspiste
tutkimuspistelistasta. 
        <h3>
        Keskittäminen projektin työalueeseen 
        </h3>
        Kun haluat keskittää näkymän projektin työalueeseen paina yläreunassa olevaa keltaista
kohdistinosoitinta. Kohdistinosoitin näkyy kun olet siirtänyt karttanäkymää niin että
projektin työalue ei ole enää kartanäkymässä.
      </p>
    </div>
  );
};

export default Page;
