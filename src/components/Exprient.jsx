import React from 'react'
import {useTranslation} from 'react-i18next';
function Exprient() {
  const {t} = useTranslation();
  return (
    <section className="skills p-5"  id="exprients" >
    <div className="container-fluid"/>
    <div className="row justify-content-end ">
        <div className="col-3 mx-0 px-0">
            <div className="title">{t("exprienceInfo")}</div>
        </div>
        <div className="col-2 mx-0 px-0">
            <div className="sub-title-border">
            <div className="exprient-title"> {t( "hooshTitle")}  </div>
            <div className="exprient-title">   {t( "patis")} </div>
            <div className="exprient-title"> {t( "acharFrance")} </div>
            <div className="exprient-title">  {t( "daneshgahAlli")}  </div>
       
            
          
            </div>
           
        </div>
        <div className="col-7">
            <div className="info">
              <div className="exprient-item">
                <span  className="tilte-experient">  {t( "frontEnd")}  </span>
                <span className="sub-title"> {t( "karAmoozi")} </span>
                <span className="date-title">1399</span>
              </div>
              <div className="exprient-item">
                <span className="tilte-experient"> {t( "karshenasShabake")} </span>
                <span className="sub-title"> {t( "karshenasShabake")}</span>
                <span className="date-title">1397 - 1398</span>
              </div>
              <div className="exprient-item">
              <span className="tilte-experient"> {t( "karshenasShabake")}</span>
                <span className="sub-title"> {t( "karshenasShabake")}</span>
                <span className="date-title">1395 - 1396</span>
              </div>
              <div className="exprient-item">
              <span className="tilte-experient">{t( "karshenasShabake")} </span>
                <span className="sub-title"> {t( "karshenasShabake")}</span>
                <span className="date-title">1393 - 1394</span>
              </div>
              </div>
            
           </div>
        </div>
 
    </section>
  )
}

export default Exprient