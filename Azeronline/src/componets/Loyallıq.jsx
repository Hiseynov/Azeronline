import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CityPopop from '../Popops/CityPopop';

function Loyallıq() {
    const [LoyaliqData,setLoyaliqData] = useState([])
    const [LoyaliqDataItem,setLoyaliqDataItem] = useState('')
    const [LoyaliqDataPopop,setLoyaliqDataPopop] = useState(false)
    useEffect(() => {
        const Loyaliq = async () => {
          try {
            axios.get(`http://localhost:3305/LoyalData`).then((e) => {
                setLoyaliqData(e.data);
            });
          } catch (error) {
            console.log(error);
          }
        };
    
        Loyaliq();
      }, []);
      console.log(LoyaliqData,'dd');
  return (
   <>
     <div className="Loyaliq-container">
        {
            LoyaliqData.map((item,id)=>(
                <>
                <div key={id} className="Loyaliq-logo"><h3>{item.logo}</h3></div>
                 <div className="Loyaliq-data">
                 <p onClick={()=>(setLoyaliqDataPopop(!LoyaliqDataPopop),setLoyaliqDataItem(item.ArxovPopop))} className='underline'>{item.Arxiv}</p>
                   </div>
                </>
            ))
        }
       
        
     </div>
     {
        LoyaliqDataPopop && (
            <CityPopop setLoyaliqDataPopop={setLoyaliqDataPopop} LoyaliqDataItem={LoyaliqDataItem}></CityPopop>
        )
     }
   </>
  )
}

export default Loyallıq