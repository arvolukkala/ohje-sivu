import React from 'react';
import '../Page.css';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
        Miten otan tabletin käyttöön
      </h2>
      <p className="texts">
      
        <iframe className='video'
          title="YouTube Video"
          src="https://www.youtube.com/embed/zxs7IEzJPdE"
          allowFullScreen>
        </iframe>
      </p>
    </div>
  );
};

export default Page;
