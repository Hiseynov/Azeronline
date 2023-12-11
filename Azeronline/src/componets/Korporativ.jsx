import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Korporativ() {
    const [KorparativData,setKorparativData] = useState([])
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
                    
                    </>
                   )) 
                }
            </div>
        </div>
   </>
  )
}

export default Korporativ