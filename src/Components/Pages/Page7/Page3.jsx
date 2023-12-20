import React from 'react';
import '../Page.css';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Laitteiden välinen Bluetooth yhteys katkeaa 
      </h2>
      <p className="texts">
      Ohjelmistojen välinen tiedonsiirtoyhteys katoaa kun koneen ja tallentimen välinen Bluetooth
yhteys katkeaa. Tämä indikoidaan käyttäjälle tekstillä: Yhteys koneeseen poikki. Tämä jälkeen
tallennin ilmoittaa: Langaton yhteys koneeseen poikki.
Kun Bluetooth yhteys muodostuu uudelleen niin ensin oikeaan yläkulmaan teksti vaihtuu:
Yhteys koneeseen poikki. Kun ohjelmistojen välinen yhteys muodostuu uudelleen niin
varoitusteksti poistuu.
      </p>
    </div>
  );
};

export default Page;
