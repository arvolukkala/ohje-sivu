import React from 'react';
import '../Page.css';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Tiedonsiirtoyhteys
      </h2>
      <p className="texts">
      Tiedonsiirtoyhteyden avulla varmistetaan, että
hankkimasi Windows on aito ja ettei sitä käytetä useammassa laitteessa kuin Microsoftohjelmiston käyttöoikeussopimuksen ehdot sallivat.
      </p>
    </div>
  );
};

export default Page;
