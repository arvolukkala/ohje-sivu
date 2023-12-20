import React from 'react';
import '../Page.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
        Laiteparin muodostaminen 
      </h2>
      <p className="texts">
      Tallennin yhdistetään koneeseen langattomasti Bluetoothin avulla. Kun olet yhdistänyt
      koneen ensimmäistä kertaa, laitepari muodostuu automaattisesti.
      <ol>
        <li>Pyyhkäise alas näytön yläreunasta.</li>
        <li>Kosketa Bluetoothia pitkään.</li>
        <li>Valitse <NavigateNextIcon className='mui-icon'/>
        Muodosta uusi laitepari.</li>
        <li>Valitse listasta CAN-RT-APPL</li>
        <li>Syötä PIN koodi 000000 ja paina OK.</li>
      </ol>
      </p>
    </div>
  );
};

export default Page;
