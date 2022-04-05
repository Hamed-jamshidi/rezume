import React from 'react'
import {useTranslation} from 'react-i18next';
function Footer() {
  const {t} = useTranslation();
  return (
    <footer class="bg-dark px-5" id="footer">
      <div class="container-fluid">
        <div class="row text-light py-4">
          <div class="col-lg-4 col-sm-6">
            <h5 class="pb-3"> {t("aboutMe")} </h5>
            <p class="lh-1">
            {t("aboutMeText")}
            </p>
          </div>
          <div class="col-lg-3 col-sm-6">
            <h5 class="pb-3"> {t("pages")}</h5>
            <ul class="list-unstyled">
              <li>
                <a class="footer-link" href="#d"> {t("personInfo")} </a>
              </li>
              <li>
                <a class="footer-link" href="#d"> {t("educationInfo")}</a>
              </li>
              <li>
                <a class="footer-link" href="#d"> {t("skills")} </a>
              </li>
              <li>
                <a class="footer-link" href="#d">  {t("exprienceInfo")}</a>
              </li>
             
              <li>
                <a class="footer-link" href="#d"> {t("contactWithMe")} </a>
              </li>
            </ul>
          </div>
         
          <div class="col-lg-5 col-sm-6">
           <h5 class="pb-3"> {t("socialMedia")} </h5> 
           {/*  <p class="lh-1">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            </p>
            <form action="" class="mb-3">
              <div class="input-group">
                <input class="form-control" placeholder="ایمیل" type="text"/>
                <div class="input-group-append">
                  <button class="btn btn-danger text-white">ارسال</button>
                </div>
              </div>
            </form> */}
            <ul class="list-inline">
              <li class="list-inline-item">
                <i class="fab fa-facebook fa-2x text-primary"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-instagram fa-2x text-danger"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-twitter fa-2x text-info"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-youtube fa-2x text-danger"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer