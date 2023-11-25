import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';

function Simsim() {
    const [SimsimData,setSimsimData]=useState([])
    const [SimsimCategoryData,setSimsimCategoryData]=useState([])
    const categories = ["Fərdi", "Biznes"];
    const [category, setCategory] = useState("Fərdi");
    const say = SimsimCategoryData.length
    useEffect(() => {
        const Simsim = async () => {
          try {
            axios.get(`http://localhost:3305/Simsim`).then((e) => {
                setSimsimData(e.data);
                setSimsimCategoryData(e.data.filter((x) => x.type === "Fərdi"));
            });
          } catch (error) {
            console.log(error);
          }
        };
    
        Simsim();
      }, []);
  return (
    <>
        <div className="Simsim-container">
            <div className="Simsim-logo">
                <h3>Simsiz</h3>
            </div>
            <div className="Simsim-word">
            <div className="Simsim-secim">
            <ul>
              {categories.map((item, id) => (
                <li
                  key={id}
                  className={category === item ? "activeCategory" : ""}
                  onClick={() => (
                    setCategory(item),
                    setSimsimCategoryData(
                        SimsimData.filter((x) => x.type === item)
                    )
                  )}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="FiberOptik-data" style={category==="Fərdi"?{gridTemplateColumns:`repeat(${say},1fr)`}:{gridTemplateColumns:`repeat(${say},1fr)`}}>
            {
                SimsimCategoryData && SimsimCategoryData.map((item,id)=>(
                    <div key={id} className="Simsim-item" >
                        <h3>{item.logo}</h3>
                        <p className="Simsim-button">
                            <span className="number">{item.number}</span>
                            <span className="text">{item.text}</span>

                        </p>
                        <p className="price">{item.price}</p>
                      
                       
                    </div>
                ))
            }
          </div>
            </div>
        </div>
    </>
  )
}

export default Simsim