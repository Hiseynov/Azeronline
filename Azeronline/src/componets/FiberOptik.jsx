import axios from "axios";
import React, { useEffect, useState } from "react";
import CityPopop from "../Popops/CityPopop";

function FiberOptik() {
    const [fiberobtikData,setFiberoptikData]= useState([])
    const [fiberobtikItemData,setFiberoptikItemData]= useState([])
    const [fiberoptikapopop,setfiberoptikapopop]=useState("")
    const [fiberoptikacategory,setfiberoptikacategory]=useState(false)
    const [sertlerPopop,setSertlerPopop]=useState(false) 
     const [SertlerData,setSertlerData]= useState([])
    const [SertlerItemData,setSertlerItemData]= useState([])
    const categories = ["Fərdi", "Biznes"];
  
    const [category, setCategory] = useState("Fərdi");
    useEffect(() => {
        const fiberobtik = async () => {
          try {
            axios.get(`http://localhost:3305/FiberOptik`).then((e) => {
                setFiberoptikData(e.data);
                setFiberoptikItemData(e.data.filter((x) => x.type === "Fərdi"));
            });
          } catch (error) {
            console.log(error);
          }
        };
    
        fiberobtik();
      }, []);
      useEffect(() => {
        const fiberobtik = async () => {
          try {
            axios.get(`http://localhost:3305/SertlerFiberObtik`).then((e) => {
                setSertlerData(e.data);
                // setFiberoptikItemData(e.data.filter((x) => x.type === "Fərdi"));
            });
          } catch (error) {
            console.log(error);
          }
        };
    
        fiberobtik();
      }, []);
      const say = fiberobtikItemData.length
    //   const [say ,setSay]= ("4")
  return (
    <>
      <div className="FiberOptik-container">
        <div className="FiberOptik-logo">
          <h3>Fiber Optik</h3>
        </div>
        <div className="FiberOptik-word">
          <div className="FiberOptik-secim">
            <ul>
              {categories.map((item, id) => (
                <li
                  key={id}
                  className={category === item ? "activeCategory" : ""}
                  onClick={() => (
                    setCategory(item),
                    setFiberoptikItemData(
                        fiberobtikData.filter((x) => x.type === item)
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
                fiberobtikItemData && fiberobtikItemData.map((item,id)=>(
                    <div key={id} className="fiberobtikData-item" >
                        <h3>{item.logo}</h3>
                        <p className="FiberOptik-button">
                            <span className="number">{item.number}</span>
                            <span className="text">{item.text}</span>

                        </p>
                        <p className="price">{item.price}</p>
                        {
                            item.Ətraflı && (
                            <p className="Ətraflı">
                            <span onClick={()=>(setfiberoptikapopop(item),setfiberoptikacategory(!fiberoptikacategory))}>{item.Ətraflı}</span>
                        </p>
                            )
                        }
                       
                    </div>
                ))
            }
          </div>
          {
            category === "Biznes" && (
                <div className="FiberOptik-sertler underline">
                  {
                    SertlerData.map((item,id)=>(
                        <h3 onClick={()=>(setSertlerPopop(!sertlerPopop),setSertlerItemData(item))} key={id}>
                            {item.logo}
                        </h3>
                    ))
                  }
                </div>
            )
          }
        </div>
      </div>
      {
        fiberoptikacategory && (
            <CityPopop fiberoptikapopop={fiberoptikapopop} setfiberoptikacategory={setfiberoptikacategory} ></CityPopop>
        )
      }
      {
        sertlerPopop && (
            <CityPopop SertlerItemData={SertlerItemData} setSertlerPopop={setSertlerPopop} ></CityPopop>
        )
      }
      {/* {
        (category === "Biznes") && (
           
            // <CityPopop SertlerData={SertlerData} setSertlerPopop={setSertlerPopop} ></CityPopop>
        )
      } */}
    </>
  );
}

export default FiberOptik;
