import React from "react";
import { useState } from "react";


function ScroolTop() {
  const [Scrool,setScrool] = useState(false)
  window.onscroll = function () {
    var scrolled = window.pageYOffset;
    if (scrolled >= 1400) {
        setScrool(true);
    } else {
        setScrool(false);
    }
    
  };
  function goTop() {
    if(window.pageYOffset > 0){
      window.scrollBy(0,-50)
      setTimeout(goTop,0)
    }
  }
  return (
    <>
        <div onClick={()=>goTop()} className={`ScroolTop ${Scrool ? "":"scale"}`}>
          <svg
            enable-background="new 0 0 32 32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              fill="none"
              stroke="#000"
              stroke-miterlimit="10"
              stroke-width="2"
            >
              <path d="m16 6v22" />
              <path d="m7.5 14 8.5-8.5 8.5 8.5" />
            </g>
          </svg>
        </div>
      
    </>
  );
}

export default ScroolTop;
