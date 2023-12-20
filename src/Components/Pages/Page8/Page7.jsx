import React from 'react';
import '../Page.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Tehtävän luonti
      </h2>
      <p className="texts">
      Tutkimustehtävä luodaan Projektilista -näkymässä. 
        <h3>
        Lisää ensimmäisen tutkimuspisteen tehtävät
        </h3>
        <ol>
          <li>Valitse projekti projektilistasta</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Muokkaa projektia</li>
          <li>Syötä tutkimuspisteen tunniste ja valitse yksi tai useampi suoritettava tutkimus- tai
          näytteenottotehtävä</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Tallenna muutokset</li>
        </ol>
        <h3>
        Lisää seuraavat tutkimuspisteen tehtävät 
        </h3>
        <ol>
          <li>Valitse projekti projektilistasta</li>
          <li>Valitse Muokkaa projektia</li>
          <li>Valitse Lisää uusi piste</li>
          <li>Syötä tutkimuspisteen tunniste ja valitse yksi tai useampi suoritettava tutkimus- tai
        näytteenottotehtävä</li>
          <li>Valitse Tallenna muutokset</li>
        </ol>
        Tutkimuspistelistauksessa tutkimuspisteen vasemmassa yläreunassa indikoidaan harmaalla
        värillä suoritusta odottavat tutkimustehtävät
        <br/><br/>
        Projektilistauksessa projektin vasemmassa yläreunassa indikoidaan harmaan ympyrän sisällä
        suoritusta odottavien tutkimustehtävien lukumäärä ja oikeassa reunassa keskellä
        tutkimuspisteiden lukumäärä
      </p>
    </div>
  );
};

export default Page;
