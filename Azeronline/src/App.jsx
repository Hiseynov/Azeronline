// import { useState } from 'react'
import Footer from './componets/Footer'
import Header from './componets/Header'
import Home from './pages/Home';
// import Home from './pages/Home'
import {useRoutes } from "react-router-dom";
import { routes } from './routes';
import ScroolTop from './componets/ScroolTop';
import ChatBot from 'react-simple-chatbot';
import { useState } from 'react';
function App() {
  const [chatAc,setChatAc] = useState(false)
  const router = useRoutes(routes);
  window.scrollTo(0,0)
  const steps = [
    {
      id: '1',
      message: 'Azeronline sizi salamlayır!👋🏼',
      trigger:'2',
    },
    {
      id: '2',
      message: 'Müraciətiniz nə ilə bağlıdır? ⬇️',
      trigger: '3',
    },

    {
      id:"3",
      options:[
        {value:"Tariflər",label:"Tariflər",trigger:"4"},
        {value:"Ödəniş Üsulu",label:"Ödəniş Üsulu",trigger:"5"},
        {value:"Kampaniyalar",label:"Kampaniyalar",trigger:"6"},
        {value:"Bizimlə Əlaqə",label:"Bizimlə Əlaqə",trigger:"7"},
        // {value:"Problemim var",label:"Problemim var",trigger:"8"},

      ]
    },
    {
      id:"4",
      message:"Hansı internet növü ilə maraqlanırsınız?",
      trigger:"9"
    },
    {
      id:"9",
      options:[
        {value:"Fiber Optik",label:"Fiber Optik",trigger:"10"},
        {value:"Simsiz",label:"Simsiz",trigger:"11"},
        {value:"ADSL",label:"ADSL",trigger:"12"},
        {value:"Korporativ",label:"Korporativ",trigger:"13"},
        {value:"Əsas menyuya qayıt",label:"Əsas menyuya qayıt",trigger:"1"},

      ]
    },
    {
      id:"10",
      message:"İnternet xidmətinə birdəfəlik qoşulma ödənişsizdir. Xidmətə qoşulmaq üçün 2 seçim mövcuddur: 1. 55 AZN məbləğindəki modemi almaq və 1 aylıq xidmət haqqını ödəmək 2. Modemi icarəyə götürərək aylıq xidmət haqqına əlavə 2 AZN ödəmək. Tariflər: SİLVER  40 Mbps – 18 azn GOLD  50 Mbps – 21 azn EXTRA 70 Mbps – 30 azn",
     trigger:'14'
    },
    {
      id:"14",
      options:[
        {value:"Qeydiyyat",label:"Qeydiyyat",trigger:"15"},
        {value:"Əsas menyuya qayıt",label:"Əsas menyuya qayıt",trigger:"1"}
      ]

    },
    {
      id:"15",
      message:"Adınız və Soyadınız:",
      trigger:"16"
    },
    {
      id: '16',
      user: true,
      trigger: '17',
    },
    {
      id:"17",
      message:"Əlaqə nömrəniz: Nümunə: +994501234567",
      trigger:"18"
      
    },
    {
      id:"18",
      user:true,
      trigger:"19"
    },
    {
      id:"19",
      message:"Şəxsiyyət vəsiqəsinin seriya və nömrəsi:",
      trigger:"20"
    },
    {
      id:"20",
      user:true,
      trigger:"21"
    },
    {
      id:"21",
      message:"Qoşulmaq istədiyiniz tarif:",
      trigger:"22"
    },
    {
      id:"22",
      user:true,
      trigger:"23"
    },
    {
      id:"23",
      message:"Müraciətiniz müvafiq şöbəyə yönləndirildi. Qoşulmanın mümkünlüyü haqqında məlumat ən qısa zamanda təqdim olunacaq. Müraciətiniz üçün təşəkkürlər!",
      trigger:"24"
    },
    {
      id:"24",
      options:[
        {value:"Əsas menyuya qayıt",label:"Əsas menyuya qayıt",trigger:"1"}
      ]

    },
    {
      id:"11",
      message:"Simsiz İnternet xidmətinə birdəfəlik qoşulma haqqı 225 AZN təşkil edir.Birdəfəlik qoşulma haqqına kabel çəkilişi, müvafiq avadanlıq və Wi-Fi routeri daxildir və abunəçinin mülkiyyətinə verilir. TARİFLƏR: Simsiz onlayn 15 – 15 Mb/s-dək = 25 azn Simsiz onlayn 25 – 25 Mb/s-dək = 35 azn Simsiz onlayn 40 – 40 Mb/s-dək = 45 azn",
      trigger:"14"
    },
    {
      id:"12",
      message:`Azeronline İnternet xidmətinə birdəfəlik qoşulma ÖDƏNİŞSİZDİR.

      Seçilmiş tarifə uyğun aylıq ödəniş növbəti 30 gün ərzində İnternetdən istifadə imkanı verir.
      Balansın bitdiyi gün internet yalnız saat 23:59 dək aktiv olacaq.
      Balansına 3 ay ardıcıl seçilmiş tarifə uyğun ödəniş etməyən abonentlə müqaviləyə xitam verilir.
      
      Müştərinin balansinda vəsait olmadığı halda, hesab gözləmə tarifi ilə hesablanacaq: 1 gün = 0.10 AZN 
      (1 ay = 3 AZN)
      
      Tariflər:
      1 mb/s – 10 azn
      3 mb/s  – 15 azn
      5 mb/s – 20 azn
      6 mb/s – 30 azn
      8 mb/s  - 40 azn 1 ay = 30 gün`,
      trigger:"14"
    },
    {
      id:"13",
      message:`Azeronline korporativ müştərilərinə yüksək sürətli və etibarlı internet bağlantısını təklif edir. “Ayrılmış İnternet Xətti” xidməti rəqəmsal dövrdə yerli şirkətlərə və təşkilatlara hər zaman onlayn qalmağa yardım edəcək.

      Üstünlüklər və imkanlar:
      300Mb/s-dək sürət
      Sürətli quraşdırılma
      Naqilsiz qoşulma
      Etibarlı bağlantı
      Xüsusi ayrılmış xətt
      Limitsiz trafik
      Statik İP
      99.50% zəmanətli işləmə vaxtı
      24/7 texniki dəstək`,
      trigger:"14"
    },
    {
      id:"5",
      message:"Ödəniş Üsulunu seçin:",
      trigger:"25"
    },
    {
      id:"25",
      options:[
        {value:"Azercell Kabinetlə",label:"Azercell Kabinetlə",trigger:"26"},
        {value:"SMS Ödəmə",label:"SMS Ödəmə",trigger:"27"},
        {value:"Onlayn Ödəmə",label:"Onlayn Ödəmə",trigger:"28"},
        {value:"Ödəniş Terminalları",label:"Ödəniş Terminalları",trigger:"29"},
        {value:"Əsas menyuya qayıt",label:"Əsas menyuya qayıt",trigger:"1"},

      ]
    },
    {
      id:"26",
      message:`Azeronline xidmətlərini ödəmək üçün Azercell Kabinetim mobil tətbiqində:
 
      1. “Menu”-dan “Mobil Ödəmə” bölməsinə daxil olursunuz.
       2. Sonra “İnternet” bölümündə “Azeronline” xidməti seçərək, ödəniş üçün lazım olan məlumatları (müştəri kodunu və ödəniş məbləğini) daxil etməklə ödənişi edirsiniz.
      3. Ödənişdən sonra məbləğin nömrənizin balansından silindiyi barədə bildiriş alacaqsınız.
      
      Tarixçə bölməsində isə son 90 günün ödəniş tarixçəsini görə biləcəksiniz.
      
      Azercell Kabinetim mobil tətbiqi ilə Azeronline Fiber Optik, Simsiz və ADSL internet (İPTV xidməti daxil) xidmətlərini ödəyə bilərsiniz.`,
      trigger:"24"
    },
    {
      id:"27",
      message:`ADSL istifadəçi adınızı (qoşulmuş telefon nömrəsi) SMS vasitəsilə 91705 və ya 91710 qısa nömrələrinə göndərin. Balansınızda 5₼ və ya 10₼ məbləğində internet aktivləşəcək. 

      Qısa nömrə:
      91705 - 5azn
      91710 - 10 azn`,
      trigger:"24"
    },
    {
      id:"28",
      message:`Azeronline internet xidmətlərini bank kartı ilə ödəmək çox rahatdır. Fiber Optik, Simsiz və ADSL internet (İPTV xidməti daxil) üzrə xidmət haqlarını Hökumət Ödəniş Portalı, ASAN ödəniş, Hesab.az, Azericard və ya CİB üzərindən ödəyə bilərsiniz.`,
      trigger:"24"
    },
    {
      id:"29",
      message:`Azeronline müştəriləri "MilliÖn", "eManat", "ExpressPay", "Kapital Bank", "ASAN ödəniş" və digər ödəniş terminalları vasitəsilə internet balanslarını artıra bilərlər`,
      trigger:"24"
    },
    {
      id:"6",
      message:`"ADSL İnternet abunəçisi qoşulduğu tarifin 3 aylıq xidmət haqqını öncədən tam ödədikdə, həmin xidmətin 4-cü ayından ÖDƏNIŞSIZ istifadə edəcək.

      Qeyd: Kampaniya yalnız ADSL internet tarifinə qoşulan fərdi istifadəçilərə (əhali qrupuna aid olan abunəçilərə) şamil edilir.`,
      trigger:"24"
    },
    {
      id:"7",
      message:`
      📍 Əlaqə vasitələri: 

      📲 8220 
      
      ☎️ 012 450-2020`,
      trigger:"30"
    },
    {
      id:"30",
      options:[
        {value:"Operatorla Əlaqə",label:"Operatorla Əlaqə",trigger:"31"},
        {value:"Əsas menyuya qayıt",label:"Əsas menyuya qayıt",trigger:"1"}
      ]
    },
    {
      id:"31",
      message:"Müraciətiniz operatora yönləndirildi..",
      trigger:"24"
    }


 
  ];

  return (
    <>
     <Header></Header>
     {/* <Home></Home> */}
     <div className="chatbots-container">
          <p onClick={()=> setChatAc(!chatAc)}>
            <img style={!chatAc?({top:'9px',left:"9px",width:"45px"}):({top:"17px",left:'17px',width:"33px"})} src={!chatAc?"https://cdn.whelp.co/livechat-default-icon.png"
            :"data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjIwIiB3aWR0aD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE5LjM5OSAyLjA0YTEuMzM0IDEuMzM0IDAgMDAtMi4yOS0uOTNsLTcuMDU2IDcuMDU3TDIuOTk1IDEuMTFBMS4zMzMgMS4zMzMgMCAxMDEuMTEgMi45OTVsNy4wNTcgNy4wNThMMS4xMSAxNy4xMWExLjMzNCAxLjMzNCAwIDEwMS44ODUgMS44ODVsNy4wNTgtNy4wNTcgNy4wNTcgNy4wNTdhMS4zMzQgMS4zMzQgMCAxMDEuODg1LTEuODg1bC03LjA1Ny03LjA1NyA3LjA1Ny03LjA1OGExLjMzMiAxLjMzMiAwIDAwLjQwNC0uOTU1eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="} alt="" />
             </p>
          {
            chatAc?(
              <div className='ChatBox'> <ChatBot steps={steps} /></div>
            )
            
           :""
          }
        
      </div>
     {router}
     {/* <ScroolTop></ScroolTop> */}
     <Footer></Footer>
    </>
  )
}

export default App
