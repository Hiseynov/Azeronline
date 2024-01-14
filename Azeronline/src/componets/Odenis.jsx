import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import CityPopop from '../Popops/CityPopop';

function Odenis() {
  const [OdenisData, setOdenisData] = useState([])
  const [OdenisDataItem, setOdenisDataItem] = useState("")
  const [OdenisDataPopop, setOdenisDataPopop] = useState(false);
  const [OdenisArxiveItem, setOdenisArxiveItem] = useState("")
  const [OdenisArxivePopop, setOdenisArxivePopop] = useState(false);

  useEffect(()=>{
    const Odenis = async () => {
      try {
        axios.get(` http://localhost:3305/dataOdenis`).then((e) => {
          setOdenisData(e.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    Odenis()
  },[])
  return (
    <>
       <div className="Odenis">
        {/* <div className="Odemis-contaimer"> */}
          {
            OdenisData.map((item,id)=>(
              <>
                 <div key={id} className="Odenis-container">
                       <div className="Odenis-logo">
                        <h3>{item.logo}</h3>
                       </div>
                       <div className="Odenis-data">
                        {
                          item.Data.map((item,id)=>(
                            <>
                              <div key={id} className="Odenis-dataItem">
                                {
                                  item.link && (
                                    <a href={item.link}>
                                      <img src={item.img}  />
                                    </a>
                                  )
                                }
                                {
                                  item.Popop && (
                                    <p onClick={()=>(setOdenisDataPopop(!OdenisDataPopop),setOdenisDataItem(item))}>
                                      <img src={item.img} alt="" />
                                    </p>
                                  )
                                }
                              </div>
                            </>
                          ))
                        }
                       </div>
                       <div className="Odenis-arxiv">
                        {
                          item.Arxiv.map((item,id)=>(
                            <h3 onClick={()=>(setOdenisArxiveItem(item),setOdenisArxivePopop(!OdenisArxivePopop))} className='underlineB' key={id}>{item.logo}</h3>
                          ))
                        }
                       </div>
                 </div>
              </>
            ))
          }
       
        {/* </div> */}
       </div>
       {
        OdenisDataPopop && (
          <CityPopop OdenisDataItem={OdenisDataItem} setOdenisDataPopop={setOdenisDataPopop}></CityPopop>
        )
       }
       {
        OdenisArxivePopop && (
          <CityPopop OdenisArxiveItem={OdenisArxiveItem} setOdenisArxivePopop={setOdenisArxivePopop}></CityPopop>
        )
       }
    </>
  )
}

export default Odenis