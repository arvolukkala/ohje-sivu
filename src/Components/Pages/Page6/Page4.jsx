import React from 'react';
import '../Page.css';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Käyttäjäprofiilin lisätiedot 
      </h2>
      <p className="texts">
      Käyttäjäprofiilin luonnin yhteydessä voidaan määrittää käyttäjän nimilyhenne ja
tutkimusorganisaation nimi sekä tutkimustietojen vastaanottajan sähköpostiosoite.
<br>
</br>
Syöttämällä lisätiedot saat automatisoitua siirtotiedoston muodostamisen ja lähettämisen
työnkulkuja:
<ul>
  <li>Tutkimusorganisaatio tulee automaattisesti siirtotiedoston OR rivin Nimi
-kenttään</li>
<br></br>
esim. OR Pohjatutkijat Oy
<br/><br/>
  <li>Käyttäjän nimilyhenne tulee automaattisesti siirtotiedoston PK rivin
Kairaaja -kenttään</li>
<br/>
esim. PK 12 KK PR KV
<br/>
</ul>
Tutkimustietojen vastaanottajan sähköpostiosoite, mikäli tieto määriteltynä, tulee
automaattisesti sähköpostin vastaanottaja kenttään, kun tutkimustiedot lähetetään
prosessissa eteenpäin.
      </p>
    </div>
  );
};

export default Page;
