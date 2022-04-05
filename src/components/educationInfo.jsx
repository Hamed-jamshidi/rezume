import React from 'react'
import {useTranslation} from 'react-i18next';
function EducationInfo() {
  const{t} = useTranslation();
  return (
    <section className="educationInfo p-5"  id="educationInfo" >
    <div className="container-fluid"/>
    <div className="row justify-content-end ">
        <div className="col-3 mx-0 px-0">
            <div className="title"> {t("ecucationalBackground")}</div>
        </div>
        <div className="col-2 mx-0 px-0">
            <div className="sub-title-border">
            <div className="date-title"> 1399 - {t("now")}</div>
            <div className="date-title">1388 - 1393</div>
          
            </div>
           
        </div>
        <div className="col-7">
            <div className="info">
              <span className="reshte-title"> {t("masterTitle")}  </span>
              <span className="grayesh-title">{t("orientation")}</span>
              <span className="university-title">{t("university")}</span>
             
            </div>
           
            <div className="info">
              <span className="reshte-title">{t("bachlorTitle")}</span>
              <span className="grayesh-title"> {t("orientationBachlor")} </span>
              <span className="university-title">{t("universityPiam")}</span>
             
            </div>
           
        </div>
    </div>
    </section>
  )
}

export default EducationInfo