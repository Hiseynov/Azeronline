import React, { useEffect } from "react";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import axios from "axios";
import { useState } from "react";
import CityPopop from "../Popops/CityPopop";
import MapPopop from "../Popops/MapPopop";
import Kampaniyalar from "../componets/Kampaniyalar";
import Xidmətlər from "../componets/Xidmətlər";
import FiberOptik from "../componets/FiberOptik";
import Simsim from "../componets/Simsim";
function Home() {
  const [Scroolpopop, setScroolPopop] = useState(false);
  const [ScroolData, setScroolData] = useState([]);
  const [ScroolItemData, setScroolItemData] = useState("");
  //
  const [MapCategoryData, setMapCategoryData] = useState([]);
//
  const [Mappopop, setMapPopop] = useState(false);
  const [MapData, setMapData] = useState([]);
  const [MapItemData, setMapItemData] = useState("");
  useEffect(() => {
    const City = async () => {
      try {
        axios.get(`http://localhost:3305/ScroolData`).then((e) => {
          setScroolData(e.data);
        });
      } catch (error) {
        console.log(error);
      }
    };

    City();
  }, []);
  useEffect(() => {
    const Map = async () => {
      try {
        axios.get(`http://localhost:3305/MapData`).then((e) => {
          setMapData(e.data);
        });
      } catch (error) {
        console.log(error);
      }
    };

    Map();
  }, []);
  useEffect(() => {
    const MapCategory = async () => {
      try {
        axios.get(`http://localhost:3305/MapCatecory`).then((e) => {
          setMapCategoryData(e.data);
        });
      } catch (error) {
        console.log(error);
      }
    };

    MapCategory();
  }, []);
 
  return (
    <>
      <div className="scrool">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {ScroolData.map((item, id) => (
            <SwiperSlide
              onClick={() => (
                setScroolPopop(!Scroolpopop), setScroolItemData(item)
              )}
              key={id}
            >
              <img src={item.img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
       
        {/* {
      ScroolItemData && ScroolItemData.map((item,id)=>(
        <p>{item.logo}</p>
      ))        
      } */}
      
      </div>
       {Scroolpopop && (
          <CityPopop
            ScroolItemData={ScroolItemData}
            setScroolPopop={setScroolPopop}
          ></CityPopop>
        )}
     <section id="Map">
          <div className="Map-container">
            <div className="Map-container-top">
              <h3>Əhatə dairəmiz</h3>
            </div>
            <div className="Map-container-center">
              <svg
                baseprofile="tiny"
                fill="#7c7c7c"
                height="780"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                version="1.2"
                viewbox="0 0 1000 783"
                width="auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                {MapData.map((item) => (
                  <path
                    style={
                      item.type === "1"
                        ? { fill: "rgb(75, 0, 155)" }
                        : item.type === "2"
                        ? { fill: "rgb(124, 124, 124)" }
                        : { fill: "rgb(111, 51, 175)" }
                    }
                    onClick={() => (setMapItemData(item), setMapPopop(true))}
                    d={item.path}
                  ></path>
                ))}

                <circle cx="653.1" cy="92.6" id="0"></circle>
                <circle cx="590.6" cy="679.6" id="1"></circle>
                <circle cx="582" cy="673.9" id="2"></circle>
              </svg>
      
            </div> 
                   {Mappopop && (
        <MapPopop
          MapItemData={MapItemData}
          setMapPopop={setMapPopop}
        ></MapPopop>
      )}
            <div className="Map-container-end">
              <ul>
                  {
                MapCategoryData.map((item,id)=>(
                  <>
                      <li key={id}>
                        <span style={
                      item.type === "1"
                        ? { background: "rgb(75, 0, 155)" }
                        : item.type === "2"
                        ? { background: "rgb(124, 124, 124)" }
                        : { background: "rgb(111, 51, 175)" }
                    }></span>
                        {item.text}
                      </li>
                  </>
                ))
              }
              </ul>
            
            </div>
          </div>
        </section>
        <section id="Kampaniyalar">
          <Kampaniyalar></Kampaniyalar>
        </section>
        <section id="Xidmətlər">
          <Xidmətlər></Xidmətlər>
        </section>
        <section id="FiberOptik">
          <FiberOptik></FiberOptik>
        </section>
        <section id="Simsim">
          <Simsim></Simsim>
        </section>
    </>
  );
}

export default Home;
