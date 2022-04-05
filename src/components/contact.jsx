import React from 'react'
import {useTranslation} from 'react-i18next';
function Contact() {
  const {t}=useTranslation();
  return (
    <section class="contact p-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-5 pb-4 mr-auto">
          <h3 class="text-white mb-5">{t("contactWithMe")}</h3>
          <form action="" class="contact-form">
            <div class="form-group py-4">
              <input type="text" class="form-control my-2 p-2 input" id='name' placeholder={t("nameOnly")}/>
              <label for="name" class="label">{t("nameOnly")}</label>
            </div>
            <div class="form-group py-4">
              <input type="text" class="form-control my-2 p-2 input" id='email' placeholder={t("email")}/>
              <label for="email" class="label">{t("email")}</label>
            </div>
            <div class="form-group py-4">
              <input type="checkbox" id="check"/>
              <label for="check" class="text-white">{t("sendForMe")}</label>
            </div>
            <button class="btn btn-block p-2 submit-button">{t("send")}</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact