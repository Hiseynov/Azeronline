import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import CityPopop from "../Popops/CityPopop";

function IPTV() {
  const [IptvData, setIptvData] = useState([]);
  const [IPTVKanalar, setIPTVKanalar] = useState([]);
  const [OpenIptv, setOpenIptv] = useState(false);
  const [SimsimData, setSimsimData] = useState([]);
  const [SimsimCategoryData, setSimsimCategoryData] = useState([]);
  const categories = ["Fərdi", "Biznes"];
  const [category, setCategory] = useState("Fərdi");
  const say = SimsimCategoryData.length;
  const [IPTVSerler, setIPTVSertler] = useState([]);
  const [OpenIptvSertler, setOpenIptvSertler] = useState(false);
  const [IPTVSerlerItem, setIPTVSertlerItem] = useState([]);

  console.log(say);
  useEffect(() => {
    const IPTV = async () => {
      try {
        axios.get(`http://localhost:3305/DataIptv`).then((e) => {
          setIptvData(e.data);
        });
      } catch (error) {
        console.log(error);
      }
    };

    IPTV();
  }, []);
  useEffect(() => {
    const Simsim = async () => {
      try {
        axios.get(` http://localhost:3305/IPtVType`).then((e) => {
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
    const IPTVSertler = async () => {
      try {
        axios.get(` http://localhost:3305/IPTVSertler`).then((e) => {
            setIPTVSertler(e.data);
            // setIPTVSertlerItem(e.data)
        });
      } catch (error) {
        console.log(error);
      }
    };

    IPTVSertler();
  }, []);
  console.log(IptvData);
  return (
    <>
      <div className="IPTV">
        <div className="IPTV-container">
          <div className="IPTV-container-top">
            {IptvData &&
              IptvData.map((item, id) => (
                <>
                  <div key={id} className="IPTV-word">
                    <h3>{item.logo}</h3>
                    <p>{item.title}</p>
                  </div>
                  <div className="IPTV-images">
                    {item.images.map((item, id) => (
                      <div key={id} className="IPTV-item">
                        <img src={item.img} />
                      </div>
                    ))}
                  </div>
                  <div className="IPTV-Kanal">
                    {item.KanallarData.map((item, id) => (
                      <h3
                        className="underlineB"
                        onClick={() => (
                          setIPTVKanalar(item), setOpenIptv(!OpenIptv)
                        )}
                        key={id}
                      >
                        {item.logoSert}
                      </h3>
                    ))}
                  </div>
                </>
              ))}
          </div>
          <div className="IPTV-container-bottom">
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
            <div className="IPTVType-data">
              {SimsimCategoryData &&
                SimsimCategoryData.map((item, id) => (
                  <>
                    {item.type === "Fərdi" && (
                      <div key={id} className="IPTVItemFerdi-data">
                        <h3>{item.logo}</h3>
                        <div className="IPTVItem-button">
                          <h5> {item.title}</h5>
                          <div className="IPTVPosition">
                            <srtong>{item.number}</srtong>
                            <p>{item.text}</p>
                          </div>
                        </div>
                        <p className="IPTV-price">{item.price}</p>
                      </div>
                    )}
                    {
                        item.type === "Biznes" && (
                            <div className="IPTVItemBiznes-data">
                                <div className="BiznesTiatle">
                                    <h5>{item.title}</h5>
                                    <div className="BiznesTop">
                                        <span>{item.top}</span>
                                    </div>
                                </div>
                                <p className="IPTV-price">{item.price}</p>
                            </div>
                        )
                    }
                  </>
                ))}
            </div>
            <div className="IPTV-sertler">
                {
                    IPTVSerler.map((item,id)=>(
                        <>
                           <h3 className="underlineB" key={id} onClick={()=>(setIPTVSertlerItem(item),setOpenIptvSertler(!OpenIptvSertler))}>{item.logo}</h3>
                        </>
                    ))
                }
            </div>
          </div>
        </div>
      </div>

      {OpenIptv && (
        <CityPopop
          setOpenIptv={setOpenIptv}
          IPTVKanalar={IPTVKanalar}
        ></CityPopop>
      )} 
       {OpenIptvSertler && (
        <CityPopop
        setOpenIptvSertler={setOpenIptvSertler}
        IPTVSerlerItem={IPTVSerlerItem}
        ></CityPopop>
      )}
    </>
  );
}

export default IPTV;
