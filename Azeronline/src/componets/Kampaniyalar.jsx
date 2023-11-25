import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CityPopop from "../Popops/CityPopop";

function Kampaniyalar() {
  const categories = ["Fərdi", "Biznes"];
  const [category, setCategory] = useState("Fərdi");
  const [categoryData, setCategoryData] = useState([]);
  const [categoryItemData, setCategoryItemData] = useState([]);
  const [categoryPopop,setCategoryPopop] = useState(false)
  const [ArxivePopop,setArxivePopop] = useState(false)
//   const [ArxivItem,setArxiveItem] = useState(false)

  const [categoryItem,setCategoryItem] = useState('')

  useEffect(() => {
    const Kampaniyalar = async () => {
      try {
        axios.get(`http://localhost:3305/KampaniyalarData`).then((e) => {
          setCategoryData(e.data);
          setCategoryItemData(e.data);
        });
      } catch (error) {
        console.log(error);
      }
    };

    Kampaniyalar();
  }, []);
  return (
    <>
      {/* {setCategoryItemData(categoryData.filter((x) => x.type === category))} */}
      <div className="Kampaniyalar-container">
        <div className="Kampaniyalar-logo">
          <h3>Kampaniyalar</h3>
        </div>
        <div className="Kampaniyalar-word">
          <div className="Kampaniyalar-secim">
            <ul>
            
                  {
            categories.map((item,id)=>(
                <li key={id} className={category ===item?"activeCategory":""} onClick={() => (setCategory(item),setCategoryItemData(categoryData.filter((x) => x.type === item)))} >{item}</li>
            ))
        }

            </ul>
          </div>
          <div className="Kampaniyalar-data">
          
             {
                categoryItemData && categoryItemData.map((item,id)=>(
                    <>
                        <div className="Kampaniyalar-item" >
                            <div className="Kampaniyalar-item-left">
                                {
                                    item.img && (
                                        <>
                                        <img src={item.img} alt="" />
                                        <p key={id}>{item.link}</p>
                                        </>
                                    )
                                }
                            </div>
                            <div className="Kampaniyalar-item-right">
                          <p className="underline" onClick={()=>(setCategoryPopop(!categoryPopop),setCategoryItem(item))}>{item.Ətrafli}</p>
                    </div>
                        </div>
                    </>
                ))
             }

          </div>
          <div className="Kampaniyalar-arxiv">
            <h3 onClick={()=>setArxivePopop(!ArxivePopop)}><p className="underline">Arxiv</p></h3>
          </div>
        </div>
      </div>
      {
        (ArxivePopop ) && (
            <CityPopop ArxivePopop={ArxivePopop} setArxivePopop={setArxivePopop} ></CityPopop>
        )
      }
      {
       categoryPopop && (
        <CityPopop categoryItem={categoryItem} setCategoryPopop={setCategoryPopop} ></CityPopop>
       )
      }
    </>
  );
}

export default Kampaniyalar;
