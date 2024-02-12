import axios from "axios";
import React, { useEffect, useState } from "react";

function CityPopop(props) {
  const [Arxivedata, setArxiveData] = useState([]);
  const [ArxiveItemdata, setArxiveItemData] = useState("");
  const [LoyaliqArxive, setLoyaliqArxive] = useState("");
  const [ArxivItem, setArxiveItem] = useState(false);
  const [LoyaliqArxivItem, setLoyaliqArxivItem] = useState(false);
  const {
    city,
    setFirstCity,
    setopenPop,
    firstCity,
    ScroolItemData,
    setScroolPopop,
    categoryItem,
    setCategoryPopop,
    setArxivePopop,
    ArxivePopop,
    setXidmetlerPopop,
    XidmetlerItem,
    fiberoptikapopop,
    setfiberoptikacategory,
    SertlerItemData,
    setSertlerPopop,
    setSertlerSimsimPopop,
    setOpenIptv,
    IPTVKanalar,
    setOpenIptvSertler,
    IPTVSerlerItem,
    ADSLDataItem,
    setADSLDataPopop,
    KorparativDataItem,
    setKorparativDataPopop,
    setLoyaliqDataPopop,
    LoyaliqDataItem,
    OdenisArxiveItem,
    setOdenisArxivePopop,
    OdenisDataItem,
    setOdenisDataPopop,
    setDaireCategory,
    DaireData,
    ADSLDaire,
    setADSLDairePopop
  } = props;
  if (ArxivePopop) {
    useEffect(() => {
      const Arxive = async () => {
        try {
          axios.get(`http://localhost:3305/ArxiveKampaniya`).then((e) => {
            setArxiveData(e.data);
          });
        } catch (error) {
          console.log(error);
        }
      };

      Arxive();
    }, []);
  }
  return (
    <>
      <div
        className="oferflow"
        onClick={() => (
          <>
            {(city && setopenPop(false)) ||
              (ScroolItemData && setScroolPopop(false)) ||
              (categoryItem && setCategoryPopop(false)) ||
              (setArxivePopop && setArxivePopop(false)) ||
              (setXidmetlerPopop && setXidmetlerPopop(false)) ||
              (setfiberoptikacategory && setfiberoptikacategory(false)) ||
              (setSertlerPopop && setSertlerPopop(false)) ||
              (setSertlerSimsimPopop && setSertlerSimsimPopop(false)) ||
              (setOpenIptv && setOpenIptv(false)) ||
              (setOpenIptvSertler && setOpenIptvSertler(false)) ||
              (setADSLDataPopop && setADSLDataPopop(false)) ||
              (setKorparativDataPopop && setKorparativDataPopop(false)) ||
              (setLoyaliqDataPopop && setLoyaliqDataPopop(false)) ||
              (setLoyaliqArxivItem && setLoyaliqArxivItem(false)) ||
              (setOdenisArxivePopop && setOdenisArxivePopop(false)) ||
              (setOdenisDataPopop && setOdenisDataPopop(false)) ||
              (setADSLDairePopop && setADSLDairePopop(false)) ||
              (setDaireCategory && setDaireCategory(false))
              
              }
          </>
        )}
      ></div>
      <div className="popopCity">
        <div
          className="All-container"
          style={
            ScroolItemData ||
            categoryItem ||
            ArxivItem ||
            XidmetlerItem ||
            fiberoptikapopop ||
            SertlerItemData ||
            IPTVKanalar ||
            KorparativDataItem ||
            LoyaliqArxivItem ||
            OdenisArxiveItem ||
            OdenisDataItem ||
            ADSLDaire ||
            DaireData
              ? { width: "80%" }
              : { width: "50%" }
          }
        >
          {city &&
            city.map((item, id) => (
              <div className="PopopCity-container" key={id}>
                <div className="popopLogo">
                  <div className="popopName">
                    <h3>{item.logo}</h3>
                    <span className="Mark-X" onClick={() => setopenPop(false)}>
                      X
                    </span>
                  </div>
                </div>
                <div className="popopCategory">
                  <ul>
                    {item.Regions &&
                      item.Regions.map((it, id) => (
                        <li key={id}>
                          <span
                            className={
                              firstCity === it.city ? "activeCity" : ""
                            }
                            onClick={() => (
                              setFirstCity(it.city), setopenPop(false)
                            )}
                          >
                            {it.city}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            ))}
          {(ScroolItemData ||
            categoryItem ||
            ArxivePopop ||
            XidmetlerItem ||
            fiberoptikapopop ||
            SertlerItemData ||
            IPTVKanalar ||
            IPTVSerlerItem ||
            ADSLDataItem ||
            KorparativDataItem ||
            LoyaliqDataItem ||
            OdenisArxiveItem ||
            OdenisDataItem ||
            ADSLDaire ||
            DaireData) && (
            <div className="Scool-container">
              <div className="ScroolLogo">
                <div className="ScroolName">
                  <h3>
                    {(ScroolItemData && ScroolItemData.logo) ||
                      (categoryItem && categoryItem.link) ||
                      (XidmetlerItem && XidmetlerItem.logo) ||
                      (ArxivItem && ArxiveItemdata.logo) ||
                      (fiberoptikapopop && fiberoptikapopop.logo) ||
                      (SertlerItemData && SertlerItemData.logo) ||
                      (IPTVKanalar && IPTVKanalar.logo) ||
                      (IPTVSerlerItem && IPTVSerlerItem.logo) ||
                      (ADSLDataItem && ADSLDataItem.map((item) => item.logo)) ||
                      (KorparativDataItem && KorparativDataItem.logo) ||
                      (LoyaliqArxivItem && LoyaliqArxive.text) ||
                      (OdenisArxiveItem && OdenisArxiveItem.logo) ||
                      (OdenisDataItem && OdenisDataItem.logo) ||
                      (ADSLDaire && ADSLDaire.logo) ||
                      (DaireData && DaireData.map(item =>item.logo)) ||
                      (!ArxivItem && <p>Arxiv</p>)}
                  </h3>{" "}
                  <span
                    className="Mark-X"
                    onClick={() =>
                      (ScroolItemData && setScroolPopop(false)) ||
                      (categoryItem && setCategoryPopop(false)) ||
                      (setArxivePopop && setArxivePopop(false)) ||
                      (setXidmetlerPopop && setXidmetlerPopop(false)) ||
                      (setfiberoptikacategory &&
                        setfiberoptikacategory(false)) ||
                      (setSertlerPopop && setSertlerPopop(false)) ||
                      (setSertlerSimsimPopop && setSertlerSimsimPopop(false)) ||
                      (setOpenIptv && setOpenIptv(false)) ||
                      (setOpenIptvSertler && setOpenIptvSertler(false)) ||
                      (setADSLDataPopop && setADSLDataPopop(false)) ||
                      (setKorparativDataPopop && setKorparativDataPopop(false)) ||
                      (setLoyaliqDataPopop && setLoyaliqDataPopop(false)) ||
                      (setLoyaliqArxivItem && setLoyaliqArxivItem(false)) ||
                      (setOdenisArxivePopop && setOdenisArxivePopop(false)) ||
                      (setOdenisDataPopop && setOdenisDataPopop(false)) ||
                      (setADSLDairePopop && setADSLDairePopop(false)) ||
                      (setDaireCategory && setDaireCategory(false))
                    }
                  >
                    X
                  </span>
                </div>
              </div>

              <div className="ScroolCategory">
                {ScroolItemData &&
                  ScroolItemData.title.map((item, id) => (
                    <p key={id}>{item.text}</p>
                  ))}
                {categoryItem &&
                  categoryItem.title.map((item, id) => (
                    <p key={id}>{item.text}</p>
                  ))}
                {!ArxivItem &&
                  Arxivedata.map((item, id) => (
                    <div className="arxiv-category" key={id}>
                      <img src={item.url} alt="" />
                      <a
                        onClick={() => (
                          setArxiveItemData(item), setArxiveItem(true)
                        )}
                      >
                        {item.logo}
                      </a>
                    </div>
                  ))}
                {ArxivItem && (
                  <>
                    <div className="ArxiveItem">
                      {ArxiveItemdata.title && (
                        <div className="arxiveText">
                          {ArxiveItemdata.title.map((item, id) => (
                            <p key={id}>{item.text}</p>
                          ))}
                        </div>
                      )}
                      {ArxiveItemdata.table && (
                        <div className="arxiveTable">
                          <table>
                            {ArxiveItemdata.table.map((item, id) => (
                              <tr key={id}>
                                {item.td.map((it, id) => (
                                  <td key={id}>{it.text}</td>
                                ))}
                              </tr>
                            ))}
                          </table>
                        </div>
                      )}
                      {ArxiveItemdata.Qeydiyyat && (
                        <div className="arxiveQeydiyat">
                          <a href={ArxiveItemdata.link}>
                            {ArxiveItemdata.Qeydiyyat}
                          </a>
                        </div>
                      )}
                    </div>
                  </>
                )}
                {XidmetlerItem && (
                  <div className="XidmetlerItem-Popop">
                    {XidmetlerItem.title &&
                      XidmetlerItem.title.map((item, id) => (
                        <p key={id}>
                          {(item.text && item.text) ||
                            (item.h4 && (
                              <>
                                <span>{item.h4}</span>
                                <img src={item.url} alt="" />
                              </>
                            )) ||
                            (item.table && (
                              <table>
                                {item.table.map((item, id) => (
                                  <tr key={id}>
                                    {item.td.map((i, ix) => (
                                      <>
                                        {i.textTh && <th>{i.textTh}</th>}
                                        {i.text && <td key={ix}>{i.text}</td>}
                                        {i.Kanalar &&
                                          i.Kanalar.map((item, id) => (
                                            <span key={id}>
                                              <img src={item.img} />
                                              <a
                                                className="doshed"
                                                href={item.link}
                                              >
                                                {item.text}
                                              </a>
                                            </span>
                                          ))}
                                      </>
                                    ))}
                                  </tr>
                                ))}
                              </table>
                            )) ||
                            (item.strong &&
                              item.strong.map((it, id) => (
                                <span className="underDash">
                                  {it.text && <span key={id}>{it.text}</span>}
                                  {it.textLink && (
                                    <a className="doshed" href={it.link}>
                                      {it.textLink}
                                    </a>
                                  )}
                                </span>
                              )))}
                        </p>
                      ))}
                  </div>
                )}
                {fiberoptikapopop && (
                  <div className="fiberOptikaItemPopop">
                    {fiberoptikapopop.popopData.map((item, id) => (
                      <>
                        {item.text && <p key={id}>{item.text}</p>}
                        {item.underline && (
                          <div className="fiberOptikText">
                            <span>{item.underline}</span>
                          </div>
                        )}
                        {(item.toll || item.tollB) && (
                          <div className="fiberOptikToll">
                            <span>{item.toll && item.toll}</span>
                            <b>{item.tollB && item.tollB}</b>
                          </div>
                        )}
                        {item.Qeydiyyat && (
                          <a href={item.link}>{item.Qeydiyyat}</a>
                        )}
                      </>
                    ))}
                  </div>
                )}
                {SertlerItemData && (
                  <>
                    <div className="fiberOptikaItemPopop">
                      {
                        SertlerItemData.data.map((item, id) => (
                          <>
                            {item.text && <p key={id}>{item.text}</p>}
                            {item.strong && (
                              <p className="sertlerNavigate">
                                {item.strong.map((item, id) => (
                                  <span key={id}>
                                    {(item.text && item.text) || (
                                      <a href={item.link}>
                                        {" "}
                                        {item.textLink && item.textLink}
                                      </a>
                                    )}
                                  </span>
                                ))}
                              </p>
                            )}
                            {item.strongSim && (
                              <p>
                                {item.strongSim.map((item, id) => (
                                  <div className="SimsimCity ">
                                    <strong key={id}>
                                      {item.underline && item.underline}
                                    </strong>
                                    <span>{item.city && item.city}</span>
                                  </div>
                                ))}
                              </p>
                            )}
                            {item.b && (
                              <p>
                                <b>{item.b}</b>
                              </p>
                            )}
                            {item.title && <p>{item.title}</p>}
                            {item.underline && (
                              <div className="fiberOptikText">
                                <span>{item.underline}</span>
                              </div>
                            )}
                            {item.toll && (
                              <div className="fiberOptikToll">
                                <span>{item.toll && item.toll}</span>
                              </div>
                            )}
                            {item.Qeydiyyat && (
                              <a href={item.link}>{item.Qeydiyyat}</a>
                            )}
                          </>
                        ))
                        //  console.log(SertlerItemData.data,'mm')
                      }
                    </div>
                  </>
                )}
                {IPTVKanalar && (
                  <div className="IptvPopop-container">
                    {IPTVKanalar.KanalPopop.map((item, id) => (
                      <>
                        <div key={id} className="IptvitemPopop">
                          <strong>{item.logo}</strong>
                          <p>{item.text}</p>
                        </div>
                      </>
                    ))}
                  </div>
                )}
                {IPTVSerlerItem && (
                  <>
                    <div className="IPTVSerlerItem">
                      {IPTVSerlerItem.data.map((item, id) => (
                        <>
                          {item.text && <p>{item.text}</p>}
                          {item.underline && (
                            <div className="fiberOptikText">
                              <span>{item.underline}</span>
                            </div>
                          )}
                          {item.toll && (
                            <div className="fiberOptikToll">
                              <span>{item.toll}</span>
                            </div>
                          )}
                        </>
                      ))}
                    </div>
                  </>
                )}
                {ADSLDataItem &&
                  ADSLDataItem.map((item) => (
                    <div className="ADSlPopop-container">
                      <div className="ADSLPopop-table">
                        <table>
                          {item.table.map((item, id) => (
                            <>
                              <tr key={id}>
                                {item.td.map((i, ix) => (
                                  <>
                                    {i.textTh && <th>{i.textTh}</th>}
                                    {i.text && <td key={ix}>{i.text}</td>}
                                  </>
                                ))}
                              </tr>
                            </>
                          ))}
                        </table>
                      </div>
                      <div className="ADSLPopop-word">
                        {item.data.map((item, id) => (
                          <>
                            <p key={id}>{item.text}</p>
                          </>
                        ))}
                      </div>
                    </div>
                  ))}
                {KorparativDataItem && (
                  <div className="KorporativPopop-container">
                    {KorparativDataItem.popopData.map((item, id) => (
                      <>
                        {item.text && <p key={id}>{item.text}</p>}
                        {item.strong && (
                          <p>
                            {item.strong &&
                              item.strong.map((item, id) => (
                                <>
                                  {item.text && <span>{item.text} </span>}
                                  {item.textLink && (
                                    <a href={item.link}> {item.textLink} </a>
                                  )}
                                </>
                              ))}
                          </p>
                        )}
                      </>
                    ))}
                  </div>
                )}
                {LoyaliqDataItem && !LoyaliqArxivItem && (
                  <div className="LoyaliqPopop-container">
                    {LoyaliqDataItem.map((item, id) => (
                      <div className="LoyaliqPopop-item" key={id}>
                        <img src={item.img} />
                        <p className="dashed"
                          onClick={() => (
                            setLoyaliqArxivItem(!LoyaliqArxivItem),
                            setLoyaliqArxive(item)
                          )}
                        >
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {LoyaliqDataItem && LoyaliqArxivItem && (
                  <div className="LoyaliqPopopItem">
                    {LoyaliqArxive.Popop.map((item, id) => (
                      <div className="LoyaligItemtext" key={id}>
                        {item.text && <p>{item.text}</p>}
                        {item.table && (
                          <div className="Loyaliqtable">
                            {item.table.map((item, id) => (
                              <p key={id}>{item.text}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {OdenisArxiveItem && (
                  <div className="OdenisItem-container">
                    {OdenisArxiveItem.Popop.map((item, id) => (
                      <div key={id} className="OdenisItem-underline">
                        <p> <b>
                          <i className="fa fa-chevron-right"></i> {item.name}
                        </b> </p>
                       
                        {item.item.map((i, id) => (
                          <>
                            {i.text && <p key={id}>{i.text}</p>}
                            {i.b && (<b>{ i.b}</b>)}
                            {i.table && (
                              <table>
                                {i.table.map((item, id) => (
                                  <tr key={id}>
                                    {item.td.map((i, ix) => (
                                      <>
                                        {i.th && <th>{i.th}</th>}
                                        {i.text && <td key={ix}>{i.text}</td>}
                                      </>
                                    ))}
                                  </tr>
                                ))}
                              </table>
                            )}
                            {i.span &&
                              i.span.map((item, id) => (
                                <>
                                {item.b && (<b>{item.b}</b>)}
                                  {item.strong && (
                                    <b key={id}>{item.strong} </b>
                                  )}
                                  {item.category && (
                                    <span className="dashed-container">
                                      {item.category.map((i, ix) => (
                                        <a className="dashed" key={ix} href={i.link}>
                                          { i.text }
                                        </a>
                                      ))}
                                    </span>
                                  )}
                                  {item.text && <span> { item.text}</span>}
                                 {item.linkT && 
                                 
                                 (<a className="dashed" href={item.link}>{ item.linkT}</a>)}
                                </>
                              ))}
                          </>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
                {
                  OdenisDataItem && (
                    <div className="OdenisDataItem-container">
                      {
                        OdenisDataItem.Popop.map((item,id)=>(
                          <>
                            {item.text && (
                              <p key={id}>{item.text}</p>
                            )}
                            {
                              item.table && (
                                <table>
                                  {
                                    item.table.map((item,id)=>(
                                      <tr key={id}>
                                        <td>{item.text}</td>
                                      </tr>
                                    ))
                                  }
                                </table>
                              )
                            }
                          </>
                        ))
                      }
                    </div>
                  )
                }
                {
                  DaireData && DaireData.map((item,id)=>(
                    <div key={id} className="Daire-container">
                      {
                        item.datacategory.map((item,id)=>(
                          <p key={id}>
                            {item.text && (<span>{item.text}</span>)}
                            {item.p && (<><span>{item.p}</span> <img src={item.img}></img></>)}
                          </p>
                        ))
                      }
                    </div>
                  ))
                }
                {
                  ADSLDaire && (
                    <div className="AdslDaire">
                      {
                        ADSLDaire.data.map((item,id)=>(
                          <p key={id}>
                            {item.text && (<><strong>{item.strong}</strong> <span>{item.text}</span></>)}
                            {item.span && item.span.map((item,id)=>(
                              <span key={id}> <strong>{item.strong}</strong> {item.text} </span>
                            ))}
                          </p>
                          ))
                      }
                    </div>
                  )
                }
              </div>
            </div>
          )}
        </div>
      </div>

    </>
  );
}

export default CityPopop;
