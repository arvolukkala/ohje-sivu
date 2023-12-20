import React from 'react';
import '../Page.css';

const Page = () => {
  const gridItems1 =[
    'Mittari:',
    'Selitys:',

    'Puolikierrokset',
    'Kairan pyörimän puolikierrosten lukumäärä',

    'Voima',
    'Voima jolla kairaa painetaan alas',

    'Vääntömomentti',
    'Momentti jolla kairaa väännetään',

    'Iskut',
    'Iskujen lukumäärä 20 cm etenemän aikaansaamiseksi',

    'Etenemä',
    'Aika joka tarvitaan 20 cm etenemän aikaansaamiseksi',

    'Vasarapaine',
    'Paine joka käytetty iskun tuottamiseksi',

    'Syöttöpaine',
    'Paine joka käytetty kairan syöttämiseksi',

    'Pyörityspaine',
    'Paine joka käytetty kairan pyörittämiseksi',

    'Pyöritysnopeus',
    'Nopeus jolla kaira pyörii',

    'Virtaus',
    'Kulutetun veden määrä',

    'Huuhtelupaine',
    'Paine jolla huuhdellaan',
  ]
  const gridItems2 = [
    'Mittari:',
    'Selitys:',

    'Kierrosnopeus',
    'Moottorin kierrosnopeus',

    'Vääntö',
    'Moottorin vääntö',

    'Moottorin lämpötila',
    'Moottorin lämpötila',

    'Akun varaus',
    'Akun varaus',

    'AdBlue määrä',
    'AdBlue nesteen määrä',

    'Polttoaineen kulutus',
    'Moottorin hetkellinen polttoaineen kulutus',

    'Käyttötunnit',
    'Moottorin käyttötunnit',

    'Öljynpaine',
    'Moottorin öljynpaine',

    'Hydrauliikkaöljyn määrä',
    'Hydrauliikkaöljyn määrä',
  ]
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Kairaus-näkymän mittarit
      </h2>
      <h3>
      Tutkimusmittarit
      </h3>
      <p className="texts">
        <div className="grid-container">
          {gridItems1.map((item, index) => (
            <div key={index} className="grid-item">
              {item}
            </div>
          ))}
        </div>
     <h3>Poravaunumittarit</h3>
        <div className="grid-container">
          {gridItems2.map((item, index) => (
            <div key={index} className="grid-item">
              {item}
            </div>
          ))}
        </div>
      </p>
    </div>
  );
};

export default Page;
