import gmLogo from './gmlogo.png'
import './TopBar.css'


function TopBar(){
    
    return(
            <div className='topbar'>
                <div className="topbar-content">
                    <img src={gmLogo} className='logo' alt='Geomachine'></img>
                </div>
           </div>
    );
}

export default TopBar