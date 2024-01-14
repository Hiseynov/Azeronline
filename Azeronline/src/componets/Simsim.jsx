import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CityPopop from "../Popops/CityPopop";

function Simsim() {
  const [SimsimData, setSimsimData] = useState([]);
  const [SimsimCategoryData, setSimsimCategoryData] = useState([]);
  const categories = ["Fərdi", "Biznes"];
  const [category, setCategory] = useState("Fərdi");
  const say = SimsimCategoryData.length;
  const [SertlerData, setSertlerData] = useState([]);
  const [SertlerItemData, setSertlerItemData] = useState([]);
  const [sertlerSimsimPopop, setSertlerSimsimPopop] = useState(false);

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
  useEffect(() => {
    const Sertlersimsim = async () => {
      try {
        axios.get(`http://localhost:3305/SertlerSimsim`).then((e) => {
          setSertlerData(e.data);
        });
      } catch (error) {
        console.log(error);
      }
    };

    Sertlersimsim();
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
                  className={category === item ? "activeCategoryBlack" : ""}
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
          <div
            className="FiberOptik-data"
            style={
              category === "Fərdi"
                ? { gridTemplateColumns: `repeat(${say},1fr)` }
                : { gridTemplateColumns: `repeat(${say},1fr)` }
            }
          >
            {SimsimCategoryData &&
              SimsimCategoryData.map((item, id) => (
                <div key={id} className="Simsim-item">
                  <h3>{item.logo}</h3>
                  <p className="Simsim-button">
                    <span className="number">{item.number}</span>
                    <span className="text">{item.text}</span>
                  </p>
                  <p className="price">{item.price}</p>
                </div>
              ))}
          </div>
          <div className="SimsimSertler ">
            {SertlerData.map((item, id) => (
              <h3 className="underlineB"
                onClick={() => (
                  setSertlerSimsimPopop(!sertlerSimsimPopop),
                  setSertlerItemData(item)
                )}
                key={id}
              >
                {item.logo}
              </h3>
            ))}
          </div>
          <div className="categoryesLink categoryesLinkB">
            <ul>
             
              <li className="underlineB">
                <a href="#Odenis">Ödəniş üsulları</a>
              </li>
           
              <li className="underlineB"><Link to={"/Login"}>Şəxsi kabinet</Link></li>
            </ul>
          </div>
        </div>
      </div>
      {sertlerSimsimPopop && <CityPopop SertlerItemData={SertlerItemData} setSertlerSimsimPopop={setSertlerSimsimPopop}></CityPopop>}
    </>
  );
}

export default Simsim;
