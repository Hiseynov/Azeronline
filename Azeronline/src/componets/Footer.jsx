import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';

function Footer() {
    const [FooterData,setFooterData] = useState([])
    useEffect(()=>{
        const Odenis = async () => {
          try {
            axios.get(` http://localhost:3305/FooterData`).then((e) => {
                setFooterData(e.data);
            });
          } catch (error) {
            console.log(error);
          }
        };
        Odenis()
      },[])
  return (
  <>
      <div id="footer">
        <div className="footer">
            <div className="footer__container">
                {
                    FooterData.map((item,id)=>(
                        <>
                    <div key={id} className="footer__top">
                    <div className="footer__top--logo">
                        <img src={item.logoUrl} alt="" />
                    </div>
                    <div className="footer__top--word">
                        <p>{item.info}</p>
                    </div>
                    <ul className="footer__top--category">
                        {
                            item.category.map((item,id)=>(
                                <li key={id}>{item.text && (<span>{item.text}</span>) || item.link && (<a className='underline' href={item.link}>{item.textLink}</a>)}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="footer__button">
                    <ul className="footer__button--category">
                        {
                            item.categoryB.map((item,id)=>(
                                <li className={item.tell && "categoryFooter"} key={id}>
                                    {item.text && (<span>{item.text}</span>) || item.tell && item.tell.map((item,id)=>(
                                        <a className='underline' key={id} href={item.link}><i className={item.icon}></i> {item.text}</a>
                                    ))}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                        </>
                    ))
                }

            </div>
        </div>
      </div>
  </>
  )
}

export default Footer