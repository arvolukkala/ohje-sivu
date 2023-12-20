import React from 'react';
import '../Page.css';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
        Toimintojen testaaminen
      </h2>
      <p className="texts">
        Testiajon aikana voit harjoitella
        <ul>
          <li>mittareiden vaihtamista</li>
          <li>trendigraafin vaihtamista</li>
          <li>alkukairauksen, maalajihavaintojen sekä kommenttien lisäämistä</li>
        </ul>
      </p>
    </div>
  );
};

export default Page;
