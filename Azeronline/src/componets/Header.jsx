import React, { useEffect } from 'react'
import axios from "axios";
import { useState } from 'react';
import CityPopop from '../Popops/CityPopop';

function Header() {
    const [city , setcity]= useState([])
    const [openpop,setopenPop] = useState(false)
    const [firstCity,setFirstCity]= useState("Baki")
    useEffect(()=>{

        const City = async () => {
          try {
           axios.get(`http://localhost:3305/PopopCity`).then((e)=>{
           
            setcity(e.data)
           })
          } catch (error) {
            console.log(error);
          }
        };
        
        City();
      },[])
     console.log(city);
  return (
    <>
      <header id="header">
        <div className="header-container">
            <div className="header-container-left">
                <div className="header-logo">
                    <img src="https://azeronline.com/uploads/2ad5c1785a6dbdae54cf32afe7ce066b.jpg" alt="" />
                </div>
                <div className="header-popop">
                    <button>Taksitli Ödəmə</button>
                </div>
            </div>
            <div className="header-container-center">
                <ul>
                    <li onClick={()=>setopenPop(!openpop)}><i className='fa fa-map-marker'></i> <span >{firstCity}</span></li>
                    <li><a href="tel:2020"><i className='fa fa-mobile' ></i> <span>2020 </span> <b>(Azercell abunəçiləri üçün)</b></a></li>
                    <li><a href="tel:8220"><i className='fa fa-phone'></i> <span>8220</span></a></li>
                    <li className='Icon'>
                        <a href="https://www.facebook.com/azeronline"><i className='fa fa-facebook-official'></i></a>
                        <a href="https://www.instagram.com/azeronlinebm/"><i className='fa fa-instagram'></i></a>
                    </li>
                </ul>

            </div>
            <div className="header-container-right">
                <div className='basket-left basket'></div>
                <div className='basket-center basket'></div>
                <div className='basket-right basket'></div>
            </div>

        </div>
        {/* <path id="32" name="Lerik" data-type="3" data-text='' d="M652.4 678.4l-4.8 9.2 2 9.6 7.6 4.9 7.4 5.1 2.6 4.6 2.2 4.7-0.4 4.1 0.3 3.7 3.5 2.5 2.9 3.5-2 5.3-3.5 5.2-3.7 2.2-3.8 1.5-3.8-0.5-4 1.2-3.6 2-3.1 3-1.2 5.1-2.6 4.5-1.9 5.5-4.2-5.3-2.6-3.6-2.8-3.2-2.8-4.4-2.8-2.5-2.2-3-1.2-5.7-1.9-4.8-4 0-8.7 4.1-5.2-0.1-3.1-3-2.7-3.9-8.3-6.7-0.3-3.7 0.7-4.3-0.8-3.1 3.9-2 2.4-3.6 2.3-2.8 0.8-4.8 1.6-4.2 2.9-3.9 3.2-3.3 3.8-2.4 3.5-2.9 15.6-9.3 14.9-10.5 5.7 6.9 2.2 9.1z"></path> */}
        {
            openpop && (<CityPopop city ={city} setopenPop={setopenPop} firstCity={firstCity} setFirstCity ={setFirstCity}></CityPopop>)
        }
      </header>
    </>
  )
}

export default Header