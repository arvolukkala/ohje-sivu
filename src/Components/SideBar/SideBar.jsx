import './SideBar.css'
import React, { useState } from 'react'
import ArrowDown from '@mui/icons-material/KeyboardArrowDown';

import MainPage from '../Pages/MainPage'

import Page1 from '../Pages/Page1/Page1'
import Page2 from '../Pages/Page1/Page2'
import Page3 from '../Pages/Page1/Page3'

import Page21 from '../Pages/Page2/Page1'
import Page22 from '../Pages/Page2/Page2'
import Page23 from '../Pages/Page2/Page3'
import Page24 from '../Pages/Page2/Page4'
import Page25 from '../Pages/Page2/Page5'
import Page26 from '../Pages/Page2/Page6'

import Page31 from "../Pages/Page3/Page1"
import Page32 from "../Pages/Page3/Page2"
import Page33 from "../Pages/Page3/Page3"
import Page34 from "../Pages/Page3/Page4"
import Page35 from "../Pages/Page3/Page5"
import Page36 from "../Pages/Page3/Page6"
import Page37 from "../Pages/Page3/Page7"
import Page38 from "../Pages/Page3/Page8"
import Page39 from "../Pages/Page3/Page9"
import Page310 from "../Pages/Page3/Page10"
import Page311 from "../Pages/Page3/Page11"
import Page312 from "../Pages/Page3/Page12"
import Page313 from "../Pages/Page3/Page13"
import Page314 from "../Pages/Page3/Page14"

import Page41 from "../Pages/Page4/Page1"
import Page42 from "../Pages/Page4/Page2"
import Page43 from "../Pages/Page4/Page3"
import Page44 from "../Pages/Page4/Page4"
import Page45 from "../Pages/Page4/Page5"
import Page46 from "../Pages/Page4/Page6"

import Page51 from "../Pages/Page5/Page1"
import Page52 from "../Pages/Page5/Page2"
import Page53 from "../Pages/Page5/Page3"

import Page61 from "../Pages/Page6/Page1"
import Page62 from "../Pages/Page6/Page2"
import Page63 from "../Pages/Page6/Page3"
import Page64 from "../Pages/Page6/Page4"
import Page65 from "../Pages/Page6/Page5"
import Page66 from "../Pages/Page6/Page6"
import Page67 from "../Pages/Page6/Page7"
import Page68 from "../Pages/Page6/Page8"
import Page69 from "../Pages/Page6/Page9"

import Page71 from "../Pages/Page7/Page1"
import Page72 from "../Pages/Page7/Page2"
import Page73 from "../Pages/Page7/Page3"
import Page74 from "../Pages/Page7/Page4"

import Page81 from "../Pages/Page8/Page1"
import Page82 from "../Pages/Page8/Page2"
import Page83 from "../Pages/Page8/Page3"
import Page84 from "../Pages/Page8/Page4"
import Page85 from "../Pages/Page8/Page5"
import Page86 from "../Pages/Page8/Page6"
import Page87 from "../Pages/Page8/Page7"
import Page88 from "../Pages/Page8/Page8"
import Page89 from "../Pages/Page8/Page9"
import Page810 from "../Pages/Page8/Page10"
import Page811 from "../Pages/Page8/Page11"
import Page812 from "../Pages/Page8/Page12"
import Page813 from "../Pages/Page8/Page13"
import Page814 from "../Pages/Page8/Page14"
import Page815 from "../Pages/Page8/Page15"
import Page816 from "../Pages/Page8/Page16"
import Page817 from "../Pages/Page8/Page17"

import Page91 from "../Pages/Page9/Page1"
import Page92 from "../Pages/Page9/Page2"
import Page93 from "../Pages/Page9/Page3"
import Page94 from "../Pages/Page9/Page4"

import Page101 from "../Pages/Page10/Page1"
import Page102 from "../Pages/Page10/Page2"
import Page103 from "../Pages/Page10/Page3"
import Page104 from "../Pages/Page10/Page4"
import Page105 from "../Pages/Page10/Page5"
import Page106 from "../Pages/Page10/Page6"
import Page107 from "../Pages/Page10/Page7"
import Page108 from "../Pages/Page10/Page8"
import Page109 from "../Pages/Page10/Page9"
import Page110 from "../Pages/Page10/Page10"
import Page111 from "../Pages/Page10/Page11"
import Page112 from "../Pages/Page10/Page12"
import Page113 from "../Pages/Page10/Page13"
import Page114 from "../Pages/Page10/Page14"
import Page115 from "../Pages/Page10/Page15"
import Page116 from "../Pages/Page10/Page16"

import Page1001 from "../Pages/Page11/Page1"

// dropdown koodi -------------------------------------------------------

const Sidebar = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);
  const [isOpen11, setIsOpen11] = useState(false);

  const [activeButton, setActiveButton] = useState(null);

  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [isClicked4, setIsClicked4] = useState(false);
  const [isClicked5, setIsClicked5] = useState(false);
  const [isClicked6, setIsClicked6] = useState(false);
  const [isClicked7, setIsClicked7] = useState(false);
  const [isClicked8, setIsClicked8] = useState(false);
  const [isClicked9, setIsClicked9] = useState(false);
  const [isClicked10, setIsClicked10] = useState(false);
  const [isClicked11, setIsClicked11] = useState(false);


  const [currentPage, setCurrentPage] = useState('MainPage');

  const handleButtonClick = (page, buttonName) => {
    setCurrentPage(page);
    setActiveButton(buttonName);
  };
  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
    setIsClicked1(!isClicked1)
  };
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
    setIsClicked2(!isClicked2)
  };
  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
    setIsClicked3(!isClicked3)
  };
  const toggleDropdown4 = () => {
    setIsOpen4(!isOpen4);
    setIsClicked4(!isClicked4)
  };
  const toggleDropdown5 = () => {
    setIsOpen5(!isOpen5);
    setIsClicked5(!isClicked5)
  };
  const toggleDropdown6 = () => {
    setIsOpen6(!isOpen6);
    setIsClicked6(!isClicked6)
  };
  const toggleDropdown7 = () => {
    setIsOpen7(!isOpen7);
    setIsClicked7(!isClicked7)
  };
  const toggleDropdown8 = () => {
    setIsOpen8(!isOpen8);
    setIsClicked8(!isClicked8)
  };
  const toggleDropdown9 = () => {
    setIsOpen9(!isOpen9);
    setIsClicked9(!isClicked9)
  };
  const toggleDropdown10 = () => {
    setIsOpen10(!isOpen10);
    setIsClicked10(!isClicked10)
  };
  const toggleDropdown11 = () => {
    setIsOpen11(!isOpen11);
    setIsClicked11(!isClicked11)
  };
  

//submenu koodi -------------------------------------

  const [isSubMenuOpen1, setIsSubMenuOpen1] = useState(false);
  const [isSubMenuOpen2, setIsSubMenuOpen2] = useState(false);
  const [isSubMenuOpen3, setIsSubMenuOpen3] = useState(false);
  const [isSubMenuOpen4, setIsSubMenuOpen4] = useState(false);
  const [isSubMenuOpen5, setIsSubMenuOpen5] = useState(false);
  const [isSubMenuOpen6, setIsSubMenuOpen6] = useState(false);
  const [isSubMenuOpen7, setIsSubMenuOpen7] = useState(false);
  const [isSubMenuOpen8, setIsSubMenuOpen8] = useState(false);
  const [isSubMenuOpen9, setIsSubMenuOpen9] = useState(false);
  const [isSubMenuOpen10, setIsSubMenuOpen10] = useState(false);
  const [isSubMenuOpen11, setIsSubMenuOpen11] = useState(false);
  const [isSubMenuOpen12, setIsSubMenuOpen12] = useState(false);

  const [isSubMenuClicked, setIsSubMenuClicked] = useState(null);
  const [isSubMenuClicked2, setIsSubMenuClicked2] = useState(null);
  const [isSubMenuClicked3, setIsSubMenuClicked3] = useState(null);
  const [isSubMenuClicked4, setIsSubMenuClicked4] = useState(false);

  const toggleSubMenu1 = () => {
    setIsSubMenuOpen1(!isSubMenuOpen1);
    setIsSubMenuClicked(!setIsSubMenuClicked)
  };
  const toggleSubMenu2 = () => {
    setIsSubMenuOpen2(!isSubMenuOpen2);
  };
  const toggleSubMenu3 = () => {
    setIsSubMenuOpen3(!isSubMenuOpen3)
  };
  const toggleSubMenu4 = () => {
    setIsSubMenuOpen4(!isSubMenuOpen4)
  };
  const toggleSubMenu5 = () => {
    setIsSubMenuOpen5(!isSubMenuOpen5);
  };
  const toggleSubMenu6 = () => {
    setIsSubMenuOpen6(!isSubMenuOpen6)
  };
  const toggleSubMenu7 = () => {
    setIsSubMenuOpen7(!isSubMenuOpen7)
  };
  const toggleSubMenu8 = () => {
    setIsSubMenuOpen8(!isSubMenuOpen8)
  };
  const toggleSubMenu9 = () => {
    setIsSubMenuOpen9(!isSubMenuOpen9);
  };
  const toggleSubMenu10 = () => {
    setIsSubMenuOpen10(!isSubMenuOpen10)
  };
  const toggleSubMenu11 = () => {
    setIsSubMenuOpen11(!isSubMenuOpen11)
  };
  const toggleSubMenu12 = () => {
    setIsSubMenuOpen12(!isSubMenuOpen12)
  };


   // ---------------------------------------------------

   return (
    <>
                
        <div className='sidenav'>
            <div className='dropdown-container'>
        {/*------------------ ensimmäinen dropdown----------------------------- */}
                <div className="dropdown">
                    <button
                    className="dropbtn" onClick={toggleDropdown1}>
                    <span className={isClicked1 ? 'arrowRotate': ''}>
                        <ArrowDown />
                    </span>
                    Raudan asennusohjeet
                    </button>
                    {isOpen1 && (

                    <div className="dropdown-menu">
                    <button
                        className={`text ${activeButton === 'Page1' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('Page1', 'Page1')}>
                        Miten asennan tallennuslogiikan
                    </button>
                    <button
                        className={`text ${activeButton === 'Page2' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('Page2', 'Page2')}>
                        Miten asennan tallentimen osat
                    </button>
                    <button
                        className={`text ${activeButton === 'Page3' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('Page3', 'Page3')}>
                        Miten asennan CPTu osat
                    </button>
                    </div>
                    )}
                </div>
{/*------------------ toinen dropdown----------------------------- */}
                <div className="dropdown">
                    <button
                    className="dropbtn" onClick={toggleDropdown2}>
                    <span className={isClicked2 ? 'arrowRotate': ''}>
                        <ArrowDown />
                    </span>
                    Ohjelmiston asennusohjeet
                    </button>
                    {isOpen2 && (
                    <div className="dropdown-menu">
                        <button
                        className={`text ${activeButton === 'Page21' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('Page21', 'Page21')}>
                            Miten otan tabletin käyttöön
                        </button>
                        <button
                        className={`text ${activeButton === 'Page22' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('Page22', 'Page22')}>
                            Miten asennan tallennuslogiikan
                        </button>
                        <button
                        className={`text ${activeButton === 'Page23' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('Page23', 'Page23')}>
                            Miten asennan Trackerin
                        </button>
                        <button
                        className={`text ${activeButton === 'Page24' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('Page24', 'Page24')}>
                            Miten asennan Axiomatic konfiguraattorin
                        </button>
                        <button
                        className={`text ${activeButton === 'Page25' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('Page25', 'Page25')}>
                            Miten asennan Airdroid ohjelman
                        </button>
                        <button
                        className={`text ${activeButton === 'Page26' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('Page26', 'Page26')}>
                            Miten asennan IQANgo ohjelman
                        </button>
                    </div>
                    )}
                </div>
{/*------------------ kolmas dropdown----------------------------- */}
                <div className="dropdown">
                    <button 
                    className="dropbtn" onClick={toggleDropdown3}>
                    <span className={isClicked3 ? 'arrowRotate': ''}>
                        <ArrowDown />
                    </span>
                    Ohjelmiston konfigurointiohjeet
                    </button>
                    {isOpen3 && (
                    <div className="dropdown-menu">
                        <button
                            className={`text ${activeButton === 'Page31' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page31', 'Page31')}>
                                Miten aktivoin datayhteyden
                        </button>
                        <button
                            className={`text ${activeButton === 'Page32' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page32', 'Page32')}>
                                Miten aktivoin WiFi yhteyden
                        </button>
                        <button
                            className={`text ${activeButton === 'Page33' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page33', 'Page33')}>
                                Miten sallin GPS paikannuksen
                        </button>
                        <button
                            className={`text ${activeButton === 'Page34' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page34', 'Page34')}>
                                Miten asetan näytön lukituksen
                        </button>
                        <button
                            className={`text ${activeButton === 'Page35' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page35', 'Page35')}>
                                Miten asetan tabletille taustakuvan
                        </button>
                        <button
                            className={`text ${activeButton === 'Page36' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page36', 'Page36')}>
                                Miten muutan tabletin täytön kirkkautta
                        </button>
                        <button
                            className={`text ${activeButton === 'Page37' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page37', 'Page37')}>
                                Miten muutan näytön kosketusmoodia
                        </button>
                        <button
                            className={`text ${activeButton === 'Page38' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page38', 'Page38')}>
                                Miten paritan tabletin ja Axiomaticin
                        </button>
                        <button
                            className={`text ${activeButton === 'Page39' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page39', 'Page39')}>
                                Miten konfiguroin Axiomaticin
                        </button>
                        <button
                            className={`text ${activeButton === 'Page310' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page310', 'Page310')}>
                                Miten paritan tabletin ja DGPS antennin
                        </button>
                        <button
                            className={`text ${activeButton === 'Page311' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page311', 'Page311')}>
                                Miten lisään DGPS antennin
                        </button>
                        <button 
                            className={`text ${activeButton === 'Page312' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page312', 'Page312')}>
                                Miten lisään CPTu kärjen
                        </button>
                        <button 
                            className={`text ${activeButton === 'Page313' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page313', 'Page313')}>
                                Miten lokalisoin havainnot
                        </button>
                        <button 
                            className={`text ${activeButton === 'Page314' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page314', 'Page314')}>
                                Miten syötän lisenssiavaimen
                        </button>
                    </div>
                    )}
                </div>      
{/*------------------ neljäs dropdown----------------------------- */}
                <div className="dropdown">
                    <button
                    className="dropbtn" onClick={toggleDropdown4}>
                    <span className={isClicked4 ? 'arrowRotate': ''}>
                        <ArrowDown />
                    </span>
                    Laiteohje
                    </button>
                    {isOpen4 && (
                    <div className="dropdown-menu">
                        <div className="dropdown">
                            <button className="submenu-dropbtn" onClick={toggleSubMenu1}>
                            <span className={isSubMenuOpen1 ? 'arrowRotate': ''}>
                                <ArrowDown />
                            </span>
                            Laitteen suojaus
                            </button>
{/*---------------------- ensimmäinen submenu----------------------------------*/}
                            {isSubMenuOpen1 && (
                            <div className="dropdown-menu">
                                <button
                                    className={`subtext ${activeButton === 'Page41' ? 'active' : ''}`}
                                    onClick={() => handleButtonClick('Page41', 'Page41')}>
                                        Lokaalit käyttäjäprofiilit
                                </button>
                                <button
                                    className={`subtext ${activeButton === 'Page42' ? 'active' : ''}`}
                                    onClick={() => handleButtonClick('Page42', 'Page42')}>
                                        Näytön lukitus
                                </button>
                            </div>
                            )}
                        </div>

                        <div className="dropdown">
                            <button className="submenu-dropbtn" onClick={toggleSubMenu2}>
                            <span className={isSubMenuOpen2 ? 'arrowRotate': ''}>
                                <ArrowDown />
                            </span>
                            Äärimmäiset valaistusolosuhteet
                            </button>
{/*---------------------- toinen submenu----------------------------------*/}
                            {isSubMenuOpen2 && (
                            <div className="dropdown-menu">
                                <button
                                    className={`subtext ${activeButton === 'Page43' ? 'active' : ''}`}
                                    onClick={() => handleButtonClick('Page43', 'Page43')}>
                                        Näytön kirkkauden säätäminen
                                </button>
                                <button
                                    className={`subtext ${activeButton === 'Page44' ? 'active' : ''}`}
                                    onClick={() => handleButtonClick('Page44', 'Page44')}>
                                        Näytön taustan muuttaminen tummaksi
                                </button>
                            </div>
                            )}
                        </div>
                        <div className="dropdown">
                            <button className="submenu-dropbtn" onClick={toggleSubMenu3}>
                            <span className={isSubMenuOpen3 ? 'arrowRotate': ''}>
                                <ArrowDown />
                            </span>
                            Käyttökieli
                            </button>
{/*---------------------- kolmas submenu----------------------------------*/}
                            {isSubMenuOpen3 && (
                            <div className="dropdown-menu">
                                <button
                                    className={`text ${activeButton === 'Page45' ? 'active' : ''}`}
                                    onClick={() => handleButtonClick('Page45', 'Page45')}>
                                        Laitteen kielen vaihtaminen
                                </button>
                            </div>
                            )}
                        </div>
                        <div className='dropdown-menu'>
                            <button
                                className={`subtext ${activeButton === 'Page46' ? 'active' : ''}`}
                                onClick={() => handleButtonClick('Page46', 'Page46')}>
                                    Laiteparin muodostaminen
                            </button>
                        </div>
                    </div>
                    )}
                </div>
{/*------------------ viides dropdown----------------------------- */}
                <div className="dropdown">
                    <button
                    className="dropbtn" onClick={() => {
                        toggleDropdown5()
                        handleButtonClick('Page51', 'Page51')
                    }}>
                    <span className={isClicked5 ? 'arrowRotate': ''}>
                        <ArrowDown />
                    </span>
                    GM Tracker ohhelmiston aktivointi
                    </button>
                    {isOpen5 && (
                    <div className="dropdown-menu">
                        <button 
                            className={`text ${activeButton === 'Page52' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page52', 'Page52')}>
                                Aktivointitilan tarkistaminen
                        </button>
                        <button 
                            className={`text ${activeButton === 'Page53' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page53', 'Page53')}>
                                Sovelluksen aktivointi tuoteavaimella
                        </button>
                    </div>
                    )}
                </div>
{/*------------------ kuudes dropdown----------------------------- */}
                <div className="dropdown">
                    <button
                    className="dropbtn" onClick={toggleDropdown6}>
                    <span className={isClicked6 ? 'arrowRotate': ''}>
                        <ArrowDown />
                    </span>
                    Käyttäjät
                    </button>
                    {isOpen6 && (
                    <div className="dropdown">
                        <button
                            className={`text ${activeButton === 'Page61' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page61', 'Page61')}>
                                Käyttäjätili
                        </button>

                        <button className="submenu-dropbtn" onClick={ () =>{
                            toggleSubMenu4()
                            handleButtonClick('Page62', 'Page62')
                            }}>
                            <span className={isSubMenuOpen4 ? 'arrowRotate': ''}>
                            <ArrowDown />
                            </span>
                            Käyttäjäprofiili
                        </button>
{/*---------------------- neljäs submenu----------------------------------*/}
                        {isSubMenuOpen4 && (
                        <div className="dropdown-menu">
                            <button
                                className={`subtext ${activeButton === 'Page63' ? 'active' : ''}`}
                                onClick={() => handleButtonClick('Page63', 'Page63')}>
                                    käyttäjäprofiilin luonti
                            </button>
                            <button
                                className={`subtext ${activeButton === 'Page64' ? 'active' : ''}`}
                                onClick={() => handleButtonClick('Page64', 'Page64')}>
                                    Käyttäjäprofiilin lisätiedot
                            </button>
                            <button
                                className={`subtext ${activeButton === 'Page65' ? 'active' : ''}`}
                                onClick={() => handleButtonClick('Page65', 'Page65')}>
                                    Käyttäjäprofiilin muuttaminen
                            </button>
                            <button
                                className={`subtext ${activeButton === 'Page66' ? 'active' : ''}`}
                                onClick={() => handleButtonClick('Page66', 'Page66')}>
                                    Käyttäjäprofiilin poistaminen
                            </button>
                            <button
                                className={`subtext ${activeButton === 'Page67' ? 'active' : ''}`}
                                onClick={() => handleButtonClick('Page67', 'Page67')}>
                                    Aktiivisen aktivointi 
                            </button>
                            <button
                                className={`subtext ${activeButton === 'Page68' ? 'active' : ''}`}
                                onClick={() => handleButtonClick('Page68', 'Page68')}>
                                    Aktiivisen käyttäjäprofiilin tarkistaminen
                            </button>
                            <button
                                className={`subtext ${activeButton === 'Page69' ? 'active' : ''}`}
                                onClick={() => handleButtonClick('Page69', 'Page69')}>
                                    Käyttäjäprofiilin passivointi
                            </button>
                        </div>
                        )}
                    </div>
                    )}
                </div>
{/*------------------ seitsemäs dropdown----------------------------- */}
                <div className="dropdown">
                    <button
                    className="dropbtn" onClick={() => {
                        toggleDropdown7()
                        handleButtonClick('Page71', 'Page71')
                    }}>
                    <span className={isClicked7 ? 'arrowRotate': ''}>
                        <ArrowDown />
                    </span>
                    Tiedonsiirtoyhteys
                    </button>
                    {isOpen7 && (
                    <div className="dropdown">
                        <button
                            className={`text ${activeButton === 'Page72' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page72', 'Page72')}>
                                Tiedonsiirtotilan tarkistaminen
                        </button>

                        <button className="submenu-dropbtn" onClick={
                            toggleSubMenu5}>
                            <span className={isSubMenuOpen5 ? 'arrowRotate': ''}>
                            <ArrowDown />
                            </span>
                            Yhteysongelmat
                        </button>
{/*---------------------- viides submenu----------------------------------*/}                        
                        {isSubMenuOpen5 && (
                        <div className="dropdown-menu">
                            <button
                                className={`subtext ${activeButton === 'Page73' ? 'active' : ''}`}
                                onClick={() => handleButtonClick('Page73', 'Page73')}>
                                    Laitteiden välinen Bluetooth yhteys katkeaa
                            </button>
                            <button
                                className={`subtext ${activeButton === 'Page74' ? 'active' : ''}`}
                                onClick={() => handleButtonClick('Page74', 'Page74')}>
                                    Ohjelmistojen välinen yhteys katkeaa
                            </button>
                        </div>
                        )}
                    </div>
                    )}
                </div>
{/*------------------ kahdeksas dropdown----------------------------- */}
                <div className="dropdown">
                    <button
                    className="dropbtn" onClick={()=>{
                        toggleDropdown8()
                        handleButtonClick('Page81', 'Page81')
                    }}>
                        <span className={isClicked8 ? 'arrowRotate': ''}>
                        <ArrowDown  />
                        </span>
                        Työn hallinta
                    </button>
                    {isOpen8 &&(
                    <div className="dropdown">
                            
                        <button className="submenu-dropbtn" onClick={()=> { 
                        toggleSubMenu6()
                        handleButtonClick('Page82', 'Page82')
                        }}>
                            <span className={isSubMenuOpen6 ? 'arrowRotate': ''}>
                            <ArrowDown />
                            </span>
                            Projektit
                        </button>
{/*---------------------- kuudes submenu----------------------------------*/} 
                        {isSubMenuOpen6 && (
                        <div className="dropdown-menu">
                            <button
                                className={`subtext ${activeButton === 'Page83' ? 'active' : ''}`}
                                onClick={() => handleButtonClick('Page83', 'Page83')}>
                                    Projektin luonti
                            </button>
                            <button
                                className={`subtext ${activeButton === 'Page84' ? 'active' : ''}`}
                                onClick={() => handleButtonClick('Page84', 'Page84')}>
                                    Projektin koordinaatti- ja korkeusjärjestelmätiedot
                            </button>
                            <button
                                className={`subtext ${activeButton === 'Page85' ? 'active' : ''}`}
                                onClick={() => handleButtonClick('Page85', 'Page85')}>
                                    Projektin muuttaminen
                            </button>
                        </div>
                        )}
                        
                    <button className="submenu-dropbtn" onClick={()=> { 
                        toggleSubMenu7()
                        handleButtonClick('Page86', 'Page86')
                    }}>
                        <span className={isSubMenuOpen7 ? 'arrowRotate': ''}>
                            <ArrowDown />
                        </span>
                            Tehtävät
                        </button>
{/*---------------------- seitsemäs submenu----------------------------------*/}                         
                        {isSubMenuOpen7 && (
                        <div className="dropdown-menu">
                        <button
                            className={`subtext ${activeButton === 'Page87' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page87', 'Page87')}>
                                Tehtävän luonti
                        </button>
                        <button
                            className={`subtext ${activeButton === 'Page88' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page88', 'Page88')}>
                                Tehtävän koordinaattitiedot
                        </button>
                        <button
                            className={`subtext ${activeButton === 'Page89' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page89', 'Page89')}>
                                Tehtävän linjatiedot
                        </button>
                        <button
                            className={`subtext ${activeButton === 'Page810' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page810', 'Page810')}>
                                Tehtävän poistaminen
                        </button>
                        <button
                            className={`subtext ${activeButton === 'Page811' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page811', 'Page811')}>
                                Tehtävän muuttaminen
                        </button>
                        <button
                            className={`subtext ${activeButton === 'Page812' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page812', 'Page812')}>
                                Tutkimuspisteen poistaminen
                        </button>
                        </div>
                    )}

                    <button className="submenu-dropbtn" onClick={
                        toggleSubMenu8
                        }>
                        <span className={isSubMenuOpen8 ? 'arrowRotate': ''}>
                            <ArrowDown />
                        </span>
                            Geolokaatio
                        </button>
{/*---------------------- kahdeksas submenu----------------------------------*/}                         
                        {isSubMenuOpen8 && (
                        <div className="dropdown-menu">
                        <button
                            className={`subtext ${activeButton === 'Page813' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page813', 'Page813')}>
                                Projektin työt kartalla
                        </button>
                        <button
                            className={`subtext ${activeButton === 'Page814' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page814', 'Page814')}>
                                Kartan siirtäminen
                        </button>
                        <button
                            className={`subtext ${activeButton === 'Page815' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page815', 'Page815')}>
                                Kartan zoomaus
                        </button>
                        <button
                            className={`subtext ${activeButton === 'Page816' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page816', 'Page816')}>
                                Kartan kokonäyttötila
                        </button>
                        <button
                            className={`subtext ${activeButton === 'Page817' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page817', 'Page817')}>
                                Oma sijainti kartalla
                        </button>
                        </div>
                    )}
                    </div>
                    )}
                </div>
{/*------------------ yhdeksäs dropdown----------------------------- */}
                <div className="dropdown">
                    <button
                    className="dropbtn" onClick={() => {
                        toggleDropdown9()
                        handleButtonClick('Page91', 'Page91')
                    }}>
                    <span className={isClicked9 ? 'arrowRotate': ''}>
                        <ArrowDown />
                    </span>
                        Testiajo
                    </button>
                    {isOpen9 && (
                    <div className="dropdown">
                        <button
                            className={`text ${activeButton === 'Page92' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page92', 'Page92')}>
                                Testiajon käynnistäminen
                        </button>
                        <button
                            className={`text ${activeButton === 'Page93' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page93', 'Page93')}>
                                Testiajon lopettaminen
                        </button>
                        <button
                            className={`text ${activeButton === 'Page94' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page94', 'Page94')}>
                                Toimintojen testaaminen
                        </button>
                    </div>
                    )}
                </div>
{/*------------------ kymmenes dropdown----------------------------- */}   
                <div className="dropdown">
                    <button
                    className="dropbtn" onClick={
                        toggleDropdown10
                    }>
                    <span className={isClicked10 ? 'arrowRotate': ''}>
                        <ArrowDown />
                    </span>
                        Kenttätutkimus ja näytteenotto
                    </button>
                    {isOpen10 && (
                        <div className="dropdown">
                        
                        <button className="submenu-dropbtn" onClick={()=>{
                        toggleSubMenu9()
                        handleButtonClick('Page101', 'Page101')
                        }}>
                        <span className={isSubMenuOpen9 ? 'arrowRotate': ''}>
                            <ArrowDown />
                        </span>
                            Datan tallentaminen
                        </button>
{/*---------------------- yhdeksäs submenu----------------------------------*/}                        
                        {isSubMenuOpen9 && (
                        <div className="dropdown-menu">
                        <button
                            className={`subtext ${activeButton === 'Page102' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page102', 'Page102')}>
                                Tutkimusdatan tallentaminen
                        </button>
                        <button
                            className={`subtext ${activeButton === 'Page103' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Page103', 'Page103')}>
                                Näytteenottodatan tallentaminen
                        </button>
                        </div>
                    )}
                        
                        <button className="submenu-dropbtn" onClick={()=>{
                        toggleSubMenu10()
                        handleButtonClick('Page104', 'Page104')
                        }}>
                        <span className={isSubMenuOpen10 ? 'arrowRotate': ''}>
                            <ArrowDown />
                        </span>
                            Tutkimus- ja näytteenottotyön seuraaminen
                        </button>
{/*---------------------- kymmenes submenu----------------------------------*/}                        
                        {isSubMenuOpen10 && (
                        <div className="dropdown-menu">
                            <button
                                className={`subtext ${activeButton === 'Page105' ? 'active' : ''}`}
                                onClick={() => handleButtonClick('Page105', 'Page105')}>
                                    Kairaus-näkymän mittarit
                            </button>
                            <button
                                className={`subtext ${activeButton === 'Page106' ? 'active' : ''}`}
                                onClick={() => handleButtonClick('Page106', 'Page106')}>
                                    Kairaus-näkymän kustomointi
                            </button>
                        </div>
                    )}
                    
                    <button
                        className={`text ${activeButton === 'Page107' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('Page107', 'Page107')}>
                            Alkukairauksen tallentaminen
                        </button>
                    <button className="submenu-dropbtn" onClick={
                        toggleSubMenu11
                    }>
                        <span className={isSubMenuOpen11 ? 'arrowRotate': ''}>
                            <ArrowDown />
                        </span>
                            Havaintojen tallentaminen 
                        </button>
{/*---------------------- yhdestoista submenu----------------------------------*/}                        
                        {isSubMenuOpen11 && (
                        <div className="dropdown-menu">
                            <button
                                className={`subtext ${activeButton === 'Page108' ? 'active' : ''}`}
                                onClick={() => handleButtonClick('Page108', 'Page108')}>
                                Maalajihavainnointi
                            </button>
                            <button
                                className={`subtext ${activeButton === 'Page109' ? 'active' : ''}`}
                                onClick={() => handleButtonClick('Page109', 'Page109')}>
                                Kommentointi
                            </button>
                            <button
                                className={`subtext ${activeButton === 'Page110' ? 'active' : ''}`}
                                onClick={() => handleButtonClick('Page110', 'Page110')}>
                                Kellotuksen käynnistäminen ja pysäyttäminen
                            </button>
                            <button
                                className={`subtext ${activeButton === 'Page111' ? 'active' : ''}`}
                                onClick={() => handleButtonClick('Page111', 'Page111')}>
                                Vasaroinnin käynnistäminen ja pysäyttäminen
                            </button>
                            <button
                                className={`subtext ${activeButton === 'Page112' ? 'active' : ''}`}
                                onClick={() => handleButtonClick('Page112', 'Page112')}>
                                Huuhtelun käynnistäminen ja pysäyttäminen
                            </button>
                            <button
                                className={`subtext ${activeButton === 'Page113' ? 'active' : ''}`}
                                onClick={() => handleButtonClick('Page113', 'Page113')}>
                                Tangon vaihto 
                            </button>
                        </div>
                    )}
                    <button
                        className={`text ${activeButton === 'Page114' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('Page114', 'Page114')}>
                        Syvyyden manuaalimääritys 
                    </button>

                    <button className="submenu-dropbtn" onClick={
                        toggleSubMenu12
                    }>
                        <span className={isSubMenuOpen12 ? 'arrowRotate': ''}>
                            <ArrowDown />
                        </span>
                            Datan lähettäminen 
                        </button>
{/*---------------------- kahdestoista submenu----------------------------------*/}                        
                        {isSubMenuOpen12 && (
                        <div className="dropdown-menu">
                            <button
                                className={`subtext ${activeButton === 'Page115' ? 'active' : ''}`}
                                onClick={() => handleButtonClick('Page115', 'Page115')}>
                                    Datan lähetys projektilistasta
                            </button>
                            <button
                                className={`subtext ${activeButton === 'Page116' ? 'active' : ''}`}
                                onClick={() => handleButtonClick('Page116', 'Page116')}>
                                    Datan lähetys tallennuksen lopetus näkymästä
                            </button>
                        </div>
                        )}
                    </div>
                    )}
                </div>
{/*------------------ tuki btn----------------------------- */}  
                <div className='dropdown'>
                    <button
                        className={`text ${activeButton === 'Page1001' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('Page1001', 'Page1001')}>
                            Tuki
                    </button>
                </div>


            </div>
        </div>


{/*sivujen renderöitni */}

{currentPage === 'MainPage' && <MainPage/>}

{currentPage === 'Page1' && <Page1 />}
{currentPage === 'Page2' && <Page2 />}
{currentPage === 'Page3' && <Page3 />}

{currentPage === 'Page21' && <Page21 />}
{currentPage === 'Page22' && <Page22 />}
{currentPage === 'Page23' && <Page23 />}
{currentPage === 'Page24' && <Page24 />}
{currentPage === 'Page25' && <Page25 />}
{currentPage === 'Page26' && <Page26 />}

{currentPage === 'Page31' && <Page31 />}
{currentPage === 'Page32' && <Page32 />}
{currentPage === 'Page33' && <Page33 />}
{currentPage === 'Page34' && <Page34 />}
{currentPage === 'Page35' && <Page35 />}
{currentPage === 'Page36' && <Page36 />}
{currentPage === 'Page37' && <Page37 />}
{currentPage === 'Page38' && <Page38 />}
{currentPage === 'Page39' && <Page39 />}
{currentPage === 'Page310' && <Page310 />}
{currentPage === 'Page311' && <Page311 />}
{currentPage === 'Page312' && <Page312 />}
{currentPage === 'Page313' && <Page313 />}
{currentPage === 'Page314' && <Page314 />}

{currentPage === 'Page41' && <Page41 />}
{currentPage === 'Page42' && <Page42 />}
{currentPage === 'Page43' && <Page43 />}
{currentPage === 'Page44' && <Page44 />}
{currentPage === 'Page45' && <Page45 />}
{currentPage === 'Page46' && <Page46 />}

{currentPage === 'Page51' && <Page51 />}
{currentPage === 'Page52' && <Page52 />}
{currentPage === 'Page53' && <Page53 />}

{currentPage === 'Page61' && <Page61 />}
{currentPage === 'Page62' && <Page62 />}
{currentPage === 'Page63' && <Page63 />}
{currentPage === 'Page64' && <Page64 />}
{currentPage === 'Page65' && <Page65 />}
{currentPage === 'Page66' && <Page66 />}
{currentPage === 'Page67' && <Page67 />}
{currentPage === 'Page68' && <Page68 />}
{currentPage === 'Page69' && <Page69 />}

{currentPage === 'Page71' && <Page71 />}
{currentPage === 'Page72' && <Page72 />}
{currentPage === 'Page73' && <Page73 />}
{currentPage === 'Page74' && <Page74 />}

{currentPage === 'Page81' && <Page81 />}
{currentPage === 'Page82' && <Page82 />}
{currentPage === 'Page83' && <Page83 />}
{currentPage === 'Page84' && <Page84 />}
{currentPage === 'Page85' && <Page85 />}
{currentPage === 'Page86' && <Page86 />}
{currentPage === 'Page87' && <Page87 />}
{currentPage === 'Page88' && <Page88 />}
{currentPage === 'Page89' && <Page89 />}
{currentPage === 'Page810' && <Page810 />}
{currentPage === 'Page811' && <Page811 />}
{currentPage === 'Page812' && <Page812 />}        
{currentPage === 'Page813' && <Page813 />}
{currentPage === 'Page814' && <Page814 />}
{currentPage === 'Page815' && <Page815 />}
{currentPage === 'Page816' && <Page816 />}
{currentPage === 'Page817' && <Page817 />}

{currentPage === 'Page91' && <Page91 />}
{currentPage === 'Page92' && <Page92 />}
{currentPage === 'Page93' && <Page93 />}
{currentPage === 'Page94' && <Page94 />}

{currentPage === 'Page101' && <Page101 />}
{currentPage === 'Page102' && <Page102 />}
{currentPage === 'Page103' && <Page103 />}
{currentPage === 'Page104' && <Page104 />}
{currentPage === 'Page105' && <Page105 />}
{currentPage === 'Page106' && <Page106 />}
{currentPage === 'Page107' && <Page107 />}
{currentPage === 'Page108' && <Page108 />}
{currentPage === 'Page109' && <Page109 />}
{currentPage === 'Page110' && <Page110 />}
{currentPage === 'Page111' && <Page111 />}
{currentPage === 'Page112' && <Page112 />}
{currentPage === 'Page113' && <Page113 />}
{currentPage === 'Page114' && <Page114 />}
{currentPage === 'Page115' && <Page115 />}
{currentPage === 'Page116' && <Page116 />}

{currentPage === 'Page1001' && <Page1001 />}

        </>
    );
};

export default Sidebar;