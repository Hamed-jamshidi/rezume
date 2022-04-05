import React from 'react'
import {useTranslation} from "react-i18next";
function Skills() {
  const {t} = useTranslation();

  return (
    <section className="skills p-5"  id="skills" >
    <div className="container-fluid"/>
    <div className="row justify-content-end ">
        <div className="col-3 mx-0 px-0">
            <div className="title">{t("skills")} </div>
        </div>
        <div className="col-2 mx-0 px-0">
            <div className="sub-title-border">
            <div className="skill-title"> Javassript</div>
            <div className="skill-title"> React js </div>
            <div className="skill-title"> Node js</div>
            <div className="skill-title"> Html</div>
            <div className="skill-title"> Css</div>
            <div className="skill-title"> Network+</div>
            <div className="skill-title"> MCSA 2016</div>
            <div className="skill-title"> CCNA</div>
            
          
            </div>
           
        </div>
        <div className="col-7">
            <div className="info">
            <div class="progress bg-light">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"> 75%</div>
</div>
            <div class="progress bg-light">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"> 75%</div>
</div>
            <div class="progress bg-light">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"> 75%</div>
</div>
            <div class="progress bg-light">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"> 75%</div>
</div>
            <div class="progress bg-light">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"> 75%</div>
</div>
            <div class="progress bg-light">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"> 75%</div>
</div>
            <div class="progress bg-light">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"> 75%</div>
</div>
            <div class="progress bg-light">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"> 75%</div>
</div>
            
           </div>
        </div>
    </div>
    </section>
  )
}

export default Skills