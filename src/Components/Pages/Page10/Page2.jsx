import React from 'react';
import '../Page.css';
import MenuIcon from '@mui/icons-material/Menu';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import tallennus from './tallennus.jpg'
import puristin from './puristin.jpg'

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Tutkimusdatan tallentaminen
      </h2>
      <h3>
      Tallentamisen aloittaminen
      </h3>
      <p className="texts">
      Tutkimusdatan tallentaminen aloitetaan Kairaus-näkymässä.
      <ol>
        <li>Avaa ohjelman päämenu <MenuIcon className='mui-icon'/> ja valitse Projektilista.</li>
        <li>Valitse tutkimuspiste</li>
        <li>Valitse tutkimus</li>
        <li>Valitse <NavigateNextIcon className='mui-icon'/>Aloita</li>
      </ol>

Kun tallennus on aloitettu oikeaan yläreunaan ilmestyy teksti Tallennus käynnissä<br/>
<img src={tallennus} alt="tallennus käynnissä" /><br/>
    <h3>
        Tallentamisen tauottaminen automaattisesti
    </h3>
    Tallennus pysähtyy automaattisesti, kun kairan kärki nousee 10 cm ylöpäin. Tallennus alkaa
uudelleen kun kairan kärki laskee aikaisemmin saavutetun maksisyvyyden alapuolelle
    <h3>
        Tallentamisen tauottaminen manuaalisesti
    </h3>
    Tallennus voidaan pysäyttää ja käynnistään uudelleen
    <ol>
        <li>Valitse <NavigateNextIcon className='mui-icon'/>Tauko</li>
        <li>Valitse <NavigateNextIcon className='mui-icon'/>Jatka</li>
    </ol>
    <h3>
        Tallentamisen lopettaminen
    </h3>
    Tutkimusdatan tallentaminen lopetetaan Kairaus-näkymässä.
    <ol>
        <li>Valitse <NavigateNextIcon className='mui-icon'/>Tauko</li>
        <li>Valitse <NavigateNextIcon className='mui-icon'/>Lopeta kairaus</li>
        <li>Valitse päättymistapa</li>
        <li>Tarkista tutkimusdata</li>
        <li>Valitse<NavigateNextIcon className='mui-icon'/>Valmis</li>
    </ol>
Tutkimustehtävän keltainen väri indikoi että tutkimusdataa ei ole vielä lähetetty eteenpäin.<br/>
<img src={puristin}></img>
    </p> 
    </div>
  );
};

export default Page;
