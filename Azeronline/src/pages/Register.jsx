import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Item } from "semantic-ui-react";
// import { toast } from "react-toastify";
function Regist() {
  const [login, idchange] = useState("");
  const [id ,setId] =useState("")
  const [name, namechange] = useState("");
  const [password, passwordchange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [address, addresschange] = useState("");
  const [gender, genderchange] = useState("");
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email boş ola bilməz");
  const [UsernameDirty, setUsernameDirty] = useState(false);
  const [UsernameError, setUsernameError] = useState("İstifadəçi adı boş ola bilməz");
  const [passworError, setPassworError] = useState("Parol boş ola bilməz");
  const [FulnameDirty, setFulnameDirty] = useState(false);
  const [FulnameError, setFulnameError] = useState("Tam ad boş ola bilməz");
  const [PhoneDirty, setPhoneDirty] = useState(false);
  const [PhoneError, setPhoneError] = useState("Telefon nömrəsi boş ola bilməz");
  const [formValid, setFormValid] = useState(false);
  const [LoginData,setLoginData] = useState([])

  useEffect(() => {
    if (
      UsernameError ||
      passworError ||
      FulnameError ||
      PhoneError ||
      emailError
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [UsernameError, passworError, FulnameError, PhoneError, emailError]);

  useEffect(()=>{

    const Login = async () => {
      try {
       axios.get(`http://localhost:3305/user`).then((e)=>{
       
       setLoginData(e.data)
       })
      } catch (error) {
        console.log(error);
      }
    };
    
    Login();
    console.log(LoginData,'d');
  },[])

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "Username":
        setUsernameDirty(true);
        break;
      case "Fulname":
        setFulnameDirty(true);
        break;
      case "phone":
        setPhoneDirty(true);
        break;
    }
  };
  const emailHandler = (e) => {
    const re =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!re.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailError("Yanlış email formatı");
    } else {
      setEmailError("");
    }
  };
  const usernameHandler = (e) => {
    if (e.target.value <= 0) {
      setUsernameError("İstifadəçi adı boş ola bilməz");
    } else if (LoginData.find((i)=>i.login === e.target.value))  {
      setUsernameError("Bu giriş artıq istifadə olunur")
    }
     else {
      // setId(login)
        setUsernameError("");
    }
  
  };
 
  const passwordHandler = (e) => {
   
     if(e.target.value.length < 3 || e.target.value.length > 8){
      setPassworError("Parol 3 simvoldan çox və 8 simvoldan az olmalıdır")
     }else{setPassworError('')}
    
  };
  const fulnameHandler = (e) => {
    if (e.target.value <= 0) {
      setFulnameError("Tam ad boş ola bilməz");
    } else {
      setFulnameError("");
    }
  };
  const phoneHandle = (e) => {
    const ph = /^(\+994|994|0)(50|51|55|70|77)(\d{7}|\d{2}- \d{3}- \d{2}- \d{2})$/;
    if (!ph.test(e.target.value)) {
      setPhoneError("Telefon nömrəsi düzgün formatda yazılmalıdır: +994501234567");
    } else {
      setPhoneError("");
    }
  };
  
//   useEffect(() => {
//     const filterYazilar = async () => {
//       try {
//         axios.get(localStorage.getItem('languages')==="Aze"? `http://localhost:3300/yazilar`:localStorage.getItem('languages')==="Ru"?` http://localhost:3301/yazilar`:"http://localhost:3302/yazilar").then((e) => {
//           setYazilarFilter(e.data);
//         });
//       } catch (error) {}
//     };

//     filterYazilar();
//   }, []);
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      let Login = {
        
        login,
        id,
        name,
        password,
        email,
        phone,
        address,
        gender
      };
      // fetch("http://localhost:3300/user", {
      //   method: "POST",
      //   headers: { "content-type": "application/json" },
      //   body: JSON.stringify(Login),
      // })
      //   .then((res) => {
      //     localStorage.setItem('login',true),location.reload()
      //   })
      //   .catch((err) => {});
      axios.post("http://localhost:3305/user", Login)
      .then(function (response) {
        // localStorage.setItem('login',true),location.reload()
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  };
  return (
   <>
                 <div className="backroundImg">
                        <form onSubmit={handlesubmit} className="from-container">
        {/* {console.log(LoginData,'ss')} */}
        
            <div className="registr-card">
            <h1>Qeydiyyat</h1>

              <div className="registr-card-body">
  
                <div className="form-container">
                  <div className="Register-form-group">
                    <label>
                      Login <span>*</span>
                    </label>
                    <input
                      onBlur={(e) => blurHandler(e)}
                      name="Username"
                      value={login}
                      onChange={(e) => { 
                        idchange(e.target.value),
                        usernameHandler(e);
                        setId(e.target.value)
                      }}
                      type="text"
                      className={
                        "form-control" +
                        (UsernameDirty && UsernameError
                          ? " BorderActiveFalse "
                          : " BorderActiveTrue")
                      }
                    />
                    {UsernameDirty && UsernameError && (
                      <div style={{ color: "red" }}>{UsernameError}</div>
                    )}
                  </div>
                 
                  <div className="Register-form-group">
                    <label>
                    Tam adı <span>*</span>
                    </label>
                    <input
                      onBlur={(e) => blurHandler(e)}
                      value={name}
                      name="Fulname"
                      onChange={(e) => {
                        namechange(e.target.value), fulnameHandler(e);
                      }}
                      type="text"
                      className={
                        "form-control" +
                        (FulnameDirty && FulnameError
                          ? " BorderActiveFalse "
                          : " BorderActiveTrue")
                      }
                    />
                    {FulnameDirty && FulnameError && (
                      <div style={{ color: "red" }}>{FulnameError}</div>
                    )}
                  </div>
                  <div className="Register-form-group">
                    <label>
                    E-poçt <span>*</span>
                    </label>
                    <input
                      onBlur={(e) => blurHandler(e)}
                      name="email"
                      value={email}
                      onChange={(e) => {
                        emailchange(e.target.value), emailHandler(e);
                      }}
                      type="text"
                      className={
                        "form-control" +
                        (emailDirty && emailError
                          ? " BorderActiveFalse "
                          : " BorderActiveTrue")
                      }
                    />
                    {emailDirty && emailError && (
                      <div style={{ color: "red" }}>{emailError}</div>
                    )}
                  </div>
                  <div className="Register-form-group">
                    <label>
                    Telefon <span>*</span>
                    </label>
                    <input
                      onBlur={(e) => blurHandler(e)}
                      name="phone"
                      value={phone}
                      onChange={(e) => {
                        phonechange(e.target.value), phoneHandle(e);
                      }}
                      type="text"
                      className={
                        "form-control" +
                        (PhoneDirty && PhoneError
                          ? " BorderActiveFalse "
                          : " BorderActiveTrue")
                      }
                    />
                    {PhoneDirty && PhoneError && (
                      <div style={{ color: "red" }}>{PhoneError}</div>
                    )}
                  </div>
                  <div className="Register-form-group">
                    <label>
                    Parol <span>*</span>
                    </label>
                    <input
                      onBlur={(e) => blurHandler(e)}
                      name="password"
                      value={password}
                      onChange={(e) => {
                        passwordchange(e.target.value), passwordHandler(e);
                      }}
                      type="password"
                      className={
                        "form-control" +
                        (passworError && passwordDirty
                          ? " BorderActiveFalse "
                          : " BorderActiveTrue")
                      }
                    />
                    {passworError && passwordDirty && (
                      <div style={{ color: "red" }}>{passworError}</div>
                    )}
                  </div>
                  <div className="Register-form-group">
                    <label>Ünvan</label>
                    <textarea
                      value={address}
                      onChange={(e) => addresschange(e.target.value)}
                      className="form-control BorderActiveTrue"
                    ></textarea>
                  </div>
                  <div className="Register-form-group-gender">
                    <ul>
                      <li><label>Gender : </label></li>
                      <li>     <span>
                      <input
                      checked={gender === "male"}
                      onChange={(e) => genderchange(e.target.value)}
                      type="radio"
                      name="gender"
                      value="male"
                      className="app-check"
                    />
                    <label>Male</label>
                      </span>
               <span>
               <input
                      checked={gender === "female"}
                      onChange={(e) => genderchange(e.target.value)}
                      type="radio"
                      name="gender"
                      value="female"
                      className="app-check"
                    />
                    <label>Female</label>
               </span>
                    </li>
                    </ul>
                    
               
                  </div>
                  
                </div>
              </div>
              <div className="registr-card-footer">
                {
                    !formValid? (
                        <button style={!formValid?{cursor: "no-drop"}:{cursor:'pointer'}}
                        disabled={!formValid}
                        type="submit"
                        className="btn btn-primary">Qeydiyyat</button>
                    ):
                    ( <Link to={"/Login"} 
                style={!formValid?{cursor: "no-drop"}:{cursor:'pointer'}}
                  disabled={!formValid}
                  type="submit"
                  className="btn btn-primary"
                >
                  Qeydiyyat
                </Link>)
                }
               
                <Link to={"/Login"} className="underlineB btn btn-danger">
                Daxil
                </Link>
              </div>
            </div>
          </form>
                 </div>

   </>
  );
}
export default Regist;
