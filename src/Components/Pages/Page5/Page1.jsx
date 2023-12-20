import React from 'react';
import '../Page.css';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
        GM Tracker ohjelmiston aktivointi
      </h2>
      <p className="texts">
      Aktivoinnin avulla varmistetaan, että hankkimasi GM Tracker sovellus on aito ja ettei sitä
käytetä useammassa laitteessa kuin GM Tracker-ohjelmiston käyttöoikeussopimuksen ehdot
sallivat.
      </p>
    </div>
  );
};

export default Page;
