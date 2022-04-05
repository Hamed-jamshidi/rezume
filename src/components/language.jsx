import React from 'react'
import {useTranslation} from 'react-i18next';

function Language() {
  const {t} = useTranslation();

  return (
    <section className="educationInfo p-5" id="languages">
      <div className="container-fluid" />
      <div className="row justify-content-end ">
        <div className="col-3 mx-0 px-0">
          <div className="title">{t("language")} </div>
        </div>
        <div className="col-2 mx-0 px-0">
          <div className="sub-title-border">
            <div className="skill-title">{t("reading")}</div>
            <div className="skill-title">{t("writing")} </div>
            <div className="skill-title"> {t("speaking")}</div>
            <div className="skill-title">{t("listening")} </div>
          </div>
        </div>
        <div className="col-7">
          <div className="progress-lang" >
            <span className="progress-language-full "></span>
            <span className="progress-language-full"></span>
            <span className="progress-language-full"></span>
            <span className="progress-language-empty"></span>
            <span className="progress-language-empty"></span>
            <span className="progress-language-empty"></span>
          </div>
          <div className="progress-lang" >
            <span className="progress-language-full "></span>
            <span className="progress-language-full"></span>
            <span className="progress-language-full"></span>
            <span className="progress-language-empty"></span>
            <span className="progress-language-empty"></span>
            <span className="progress-language-empty"></span>
          </div>
          <div className="progress-lang" >
            <span className="progress-language-full "></span>
            <span className="progress-language-full"></span>
            <span className="progress-language-full"></span>
            <span className="progress-language-empty"></span>
            <span className="progress-language-empty"></span>
            <span className="progress-language-empty"></span>
          </div>
          <div className="progress-lang" >
            <span className="progress-language-full "></span>
            <span className="progress-language-full"></span>
            <span className="progress-language-full"></span>
            <span className="progress-language-empty"></span>
            <span className="progress-language-empty"></span>
            <span className="progress-language-empty"></span>
          </div>
        
        </div>
      </div>
    </section>
  )
}

export default Language
