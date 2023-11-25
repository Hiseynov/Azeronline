import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import CityPopop from '../Popops/CityPopop'

function Xidmətlər() {
    const [XidmetlerData,setXidmetlerData]= useState([])
    const [XidmetlerPopop,setXidmetlerPopop]= useState(false)
    const [XidmetlerItem,setXidmetlerItem] = useState("")
    useEffect(() => {
        const XidmetlerDa = async () => {
          try {
            axios.get(` http://localhost:3305/Xidmedt`).then((e) => {
                setXidmetlerData(e.data);
             
            });
          } catch (error) {
            console.log(error);
          }
        };
        XidmetlerDa();
      }, []);
  return (
    <>
    <div className="Xidmetler">
      <div className="Xidmetler-logo">
        <h3>Xidmətlər</h3>
      </div>
         <div className="Xidmetler-container">

        {
            XidmetlerData.map((item,id)=>(
                <>
                   <div key={id} className="XidmetlerItem" onClick={()=>(setXidmetlerPopop(!XidmetlerPopop),setXidmetlerItem(item))} >
                    <img src={item.img} alt="" />
                    <a>{item.logo}</a>
                   </div>
                </>
            ))
        }
       </div>
    </div>
    {
      XidmetlerPopop && <CityPopop setXidmetlerPopop={setXidmetlerPopop} XidmetlerItem={XidmetlerItem} ></CityPopop>
    }
    </>
  )
}

export default Xidmətlər