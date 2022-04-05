import React, { useEffect } from 'react';

const setDark = () => {
  localStorage.setItem('theme', 'dark');
  document.documentElement.setAttribute('data-theme', 'dark');
}

const setLight = () => {
  localStorage.setItem('theme', 'light')
  document.documentElement.setAttribute('data-theme', 'light')
}


function handlerChange(e) {
  console.log('handle change')
  if (localStorage.getItem('theme')==='light') {
    setDark()
  } else {
    setLight()
  }
}

function DarkMode() {
    useEffect(()=>{
        if(localStorage.getItem('theme')==="dark"){
            setDark();
        }else{
            setLight();
        }
        
         
      },[]);
  return (
    <>
      {/* // <div className="toggle-theme-wrapper">
    //     <span>light</span>

    //     <label className="toggle-theme" htmlFor="chekbox">
    //         <input 
    //         onChange={(e)=>handlerChange(e)}
    //         type='checkbox'
    //         id='checkbox'
    //         />
    //         <div className="slider round"></div>
    //     </label>
    //     <span >dark</span>
    // </div> */}
      <button 
      onClick={(e)=>handlerChange(e)}
      className="btn btn-sm btn-info">dark/light</button>
    </>
  )
}

export default DarkMode
