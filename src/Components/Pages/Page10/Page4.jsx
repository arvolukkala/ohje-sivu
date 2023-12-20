import React from 'react';
import '../Page.css';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Tutkimus- ja näytteenottotyön seuraaminen
      </h2>
      <p className="texts">
      Työn suoritetaan reaaliajassa Kairaus-näkymässä (kojelauta).<br/>
      Mittareiden arvot synkronoidaan
      syvyyden mukaan ja näytetään yhden senttimetrin välein.<br/>
      Jokaiselle tutkimus- ja näytteenottotyypille on määritelty oma oletusmittaristo.
    </p>
    </div>
  );
};

export default Page;
