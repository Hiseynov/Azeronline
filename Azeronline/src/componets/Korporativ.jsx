import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CityPopop from '../Popops/CityPopop';

function Korporativ() {
    const [KorparativData,setKorparativData] = useState([])
    const [KorparativDataItem,setKorparativDataItem] = useState('')
    const [KorparativDataPopop,setKorparativDataPopop] = useState(false)
    useEffect(() => {
        const Korparativ = async () => {
          try {
            axios.get(` http://localhost:3305/KorporativData`).then((e) => {
                setKorparativData(e.data);
            });
          } catch (error) {
            console.log(error);
          }
        };
    
        Korparativ();
      }, []);
  return (
   <>
        <div className="Korporativ">
            <div className="Korporativ-container">
                {
                   KorparativData.map((item,id)=>(
                    <>
                       <div key={id} className="Korporativ-logo">
                        <h3>{item.logo}</h3>
                       </div>
                       <div className="Korporativ-categories">
                        {
                          item.data.map((item,id)=>(
                            <>
                                <div key={id} className="Korporativ-category">
                                  <div className="Korporativ-category-left">
                                    <img src={item.img} alt="" />
                                    <h3>{item.logo}</h3>
                                  </div>
                                  <div className="Korporativ-category-right">
                                    <p onClick={()=>(setKorparativDataItem(item),setKorparativDataPopop(!KorparativDataPopop))} className='underline'>{item.Ətrafli}</p>
                                  </div>
                                </div>
                            </>
                          ))
                        }
                       </div>
                    </>
                   )) 
                }
            </div>
         
        </div>

        {
          KorparativDataPopop && (
            <CityPopop KorparativDataItem={KorparativDataItem} setKorparativDataPopop={setKorparativDataPopop}></CityPopop>
          )
        }
   </>
  )
}

export default Korporativ