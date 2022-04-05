import React,{useState} from 'react';

import DarkMode from './darkMode';

import {useTranslation } from 'react-i18next';
import DirectionMode from './changeDirection';


function Navbar() {
  
  const {t ,i18n} = useTranslation();
  // const [currentLanguage ,setLanguage]= useState('en');

  // function changeLanguageHandler(e){
  //   const languageValue=e.target.value
  //   i18n.changeLanguage(languageValue);
  //   document.body.style.direction='ltr';
  // }
  function handleclick() {
    document.getElementById('navbutton').classList.toggle('change')
  }
  return (
    <>
      <header>
        {/* navbar */}
        <nav className="navbar navbar-expand-lg fixed-top nav-menu custom-navbar">
          <button
            className="navbar-toggler nav-button"
            id="navbutton"
            data-toggle="collapse"
            data-target="#mynav"
            onClick={handleclick}
          >
            <div className="line1 "></div>
            <div className="line2 "></div>
            <div className="line3 "></div>
          </button>
          <div className="collapse navbar-collapse" id="mynav">
            <ul className="navbar-nav list-unstyled">
              <li className="nav-item">
               <img src="./images/hamed.jpeg" alt="" className="persion-image"/>
              </li>
              <li className="nav-item">
                <a href="#personInfo" className="nav-link m-2 menu-item">
                {t("personInfo")}
                </a>
              </li>
              <li className="nav-item">
                <a href="#educationInfo" className="nav-link m-2 menu-item">
                {t("educationInfo")}
                </a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link m-2 menu-item">
                {t("skills")}
                </a>
              </li>
              <li className="nav-item">
                <a href="#exprients" className="nav-link m-2 menu-item">
                 {t("exprienceInfo")}
                </a>
              </li>
              <li className="nav-item">
                <a href="#footer" className="nav-link m-2 menu-item">
                 {t("socialMedia")}
                </a>
              </li>
              <li className="nav-item"> 
              <DarkMode/>
               {/* <button className="btn btn-info btnsm" onClick={handleClickMode}>dark / light</button> */}
              </li>
              <li className="nav-item"> 
              <DirectionMode/>
         {/* <select className="custome-select" style={{width:200}} onChange={(e)=>changeLanguageHandler(e)}>
           <option value='en'>english</option>
           <option value='fa'>persian</option>
           
           </select> */}
               {/* <button className="btn btn-info btnsm" onClick={handleClickMode}>dark / light</button> */}
              </li>
            </ul>
          </div>
        </nav>
        {/* end of navbar */}
        {/* banner */}
        <div
          className="text-light text-uppercase font-weight-bold text-left banner"
          style={{ fontFamily: 'Impact' }}
        >
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <div class="text-center fram">
                <img
                  src="images/hamed.jpeg"
                  className="profile_image"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <h1 className="display-1 banner-heading">
                <span> Hamed Jamshidi</span>
              </h1>
              <p className="mt-3 h1 banner-par">
                <span>front-end developer</span>
              </p>
            </div>
          </div>
        </div>
        {/* end of banner  */}
      </header>
    </>
  )
}

export default Navbar
