import React from 'react';
import '../Page.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Page = () => {
  return (
    <div className='text-container'>
      <h2 className='otsikko'>
      Maalajihavainnointi
      </h2>
      <p className="texts">
        <ol>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Tauko kun haluat syöttää maalajihavainnon</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Maalaji</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Maalajiluokka</li>
          <li>Valitse <NavigateNextIcon className='mui-icon'/>Maalajialiluokka</li>
        </ol>
Maalajihavainnon kohdalle tulee valkoinen katkoviiva ja maalajin symboli alkaa piirtymää siitä
eteenpäin. Havainto tulee myös näkyviin infra raporttiin.
    </p>
    </div>
  );
};

export default Page;
