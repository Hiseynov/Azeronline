import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import CityPopop from "../Popops/CityPopop";

function ADSL() {
  const [ADSLData, setADSLData] = useState([]);
  const [ADSLDataItem,setADSLDataItem] = useState('')
  const [ADSLDataPopop,setADSLDataPopop] = useState(false)
//   console.log(ADSLDataItem,'s');
  useEffect(() => {
    const ADSL1 = async () => {
      try {
        axios.get(`http://localhost:3305/ADSL`).then((e) => {
          setADSLData(e.data);
        });
      } catch (error) {
        console.log(error);
      }
    };

    ADSL1();
  }, []);
  return (
    <>
      <div className="ADSL">
        <div className="ADSL-container">
          {ADSLData &&
            ADSLData.map((item, id) => (
              <>
                <div key={id} className="ADSL-Logo">
                  <h3>{item.logoH3}</h3>
                </div>
                <div className="ADSL-Data">
                  {item.Data.map((i, d) => (
                    <div key={d} className="ADSL-dataItem">
                        <div className="ADSL-dataItemButton">
                            <strong>{i.number}</strong>
                            <p>{i.text}</p>
                        </div>
                        <p className="ADSL-price">
                            {i.price}
                        </p>
                    </div>
                  ))}
                </div>
                <div className="ADSL-sertler">
                    <h3 onClick={()=>(setADSLDataItem(item.ADSlSertler),setADSLDataPopop(!ADSLDataPopop))} className="underline">{item.logoSertler}</h3>
                </div>
                {
                    console.log(ADSLDataItem,'dsddf')
                }
              </>
            ))}
        </div>
      </div>
      {
        ADSLDataPopop && (
            <CityPopop ADSLDataItem={ADSLDataItem} setADSLDataPopop={setADSLDataPopop}></CityPopop>
        )
      }
      
    </>
  );
}

export default ADSL;
