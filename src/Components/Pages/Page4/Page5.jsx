import React from 'react';
import '../Page.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
        Laitteen kielen vaihtaminen
      </h2>
      <p className="texts">
      Voit valita kielen jolla käytät Android-tablettiasi. 
      <h3>Kielen aktivointi</h3>
      <ol>
        <li>Avaa laitteen Asetukset-sovellus.</li>
        <li>Valitse Järjestelmä <NavigateNextIcon className='mui-icon'/>
        Kielet ja syöttötapa <NavigateNextIcon className='mui-icon'/>Kielet.</li>
        <li>Kielen lisääminen:</li>
          <ol>
            <li>Valitse Lisää kieli.</li>
            <li>Valitse kieli, jota haluat käyttää.</li>
            <li>Kosketa haluamaasi kieltä ja vedä se luettelon yläosaan.</li>
          </ol>
      </ol>
      <h3>Kielen poistaminen</h3>
      <ol>
        <li>Valitse yläreunasta <NavigateNextIcon className='mui-icon'/>
        Lisää Poista.</li>
        <li>Valitse kieli.</li>
        <li>Valitse yläreunasta Poista.</li>
      </ol>
      </p>
    </div>
  );
};

export default Page;
