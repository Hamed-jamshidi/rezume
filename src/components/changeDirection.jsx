import React, { useEffect } from 'react';
import {useTranslation } from 'react-i18next';
const setRtlDir = () => {
  localStorage.setItem('themeDir', 'rtl');
  document.documentElement.setAttribute('direction-theme', 'rtlDirection');
}

const setLtrDir = () => {
  localStorage.setItem('themeDir', 'ltr')
  document.documentElement.setAttribute('direction-theme', 'ltrDirection')
}


function DirectionMode() {
    const {i18n} = useTranslation();
function handlerChange(e) {
    const languageValue=e.target.value
    i18n.changeLanguage(languageValue);
  console.log('handle change')
  if (languageValue==='fa' && localStorage.getItem('themeDir')==='ltr') {
    setRtlDir()
  } else {
    setLtrDir()
  }
}
   
    useEffect(()=>{
        if(localStorage.getItem('i18nextLng')==="fa"){
          i18n.changeLanguage('fa');
            setRtlDir();
        }else{
          i18n.changeLanguage('en');
            setLtrDir();
        };
     
        
         
      },[]);
  return (
    <>
     <select className="custome-select" style={{width:200}} onChange={(e)=>handlerChange(e)}>
           <option value='en'>english</option>
           <option value='fa'>persian</option>
           
           </select>
    </>
  )
}

export default DirectionMode
