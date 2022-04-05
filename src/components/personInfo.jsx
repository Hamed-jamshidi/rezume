import React from 'react'
import {useTranslation} from "react-i18next";
function PersonInfo() {
  const {t} =useTranslation();
  return (
   <section className="personInfo p-5"  id="personInfo" >
       <div className="container-fluid"/>
       <div className="row justify-content-end ">
           <div className="col-3 mx-0 px-0">
               <div className="title">{t("personInfo")}</div>
           </div>
           <div className="col-2 mx-0 px-0">
               <div className="sub-title-border">
               <div className="sub-title">{t( "name")}</div>
               <div className="sub-title">{t( "brithday")} </div>
               <div className="sub-title">{t( "email")}</div>
               <div className="sub-title">{t("phone")} </div>
               </div>
              
           </div>
           <div className="col-7">
               <div className="info">
               {t("hamed")}  
               </div>
               <div className="info">
               {t("date")}
               </div>
               <div className="info">
                 jamshidi7011@gmail.com
               </div>
               <div className="info">
                 0919-972-1472
               </div>
           </div>
       </div>
       <div className="row about-me">
        <div className="col-md-6 col-sm-12 ">
          <h5 className="about-me-text">{t("aboutMe")}</h5>
          <p className="about-me-text ">{t("aboutMeText")}  </p>
        </div>
        <div className="col-md-6 col-sm-12">
       <img className="img-about-me" src="images/hamed.jpeg" alt=""/>
        </div>
       </div>
   </section>
  )
}

export default PersonInfo
