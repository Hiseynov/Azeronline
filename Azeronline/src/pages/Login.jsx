import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify"

const Login = () => {
  const [yazilarFilter, setYazilarFilter] = useState([]);
  const [Login, setLogin] = useState([]);
  const [username, usernameupdate] = useState("");
  const [password, passwordupdate] = useState("");
  const [UsernameDirty, setUsernameDirty] = useState(false);
  const [eyePassword, seteyePassword] = useState(false);
  const [UsernameError, setUsernameError] = useState(
    "İstifadəçi adı boş ola bilməz"
  );
  const [passworError, setPassworError] = useState("Parol boş ola bilməz");
  const [passwordDirty, setPasswordDirty] = useState(false);

  useEffect(() => {
    const City = async () => {
      try {
        axios.get("http://localhost:3305/user/" + username).then((e) => {
          setLogin(e.data);
        });
      } catch (error) {
        console.log(error);
      }
    };

    City();
  }, []);
  console.log(Login, "df");
  // if (Login.map((item)=>(item.id===username && item.password === password))) {
  //   setPassworError("")
  //   // setPassworError("")
  // }else{
  //   alert("iksinen biri serfdi")
  // }
  const usenavigate = useNavigate();
  const ProceedLogin = (e) => {
    e.preventDefault();
    if (formValid) {
      // console.log('proceed');
      fetch("http://localhost:3305/user/" + username)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          // console.log(resp);
          if (Object.keys(resp).length === 0) {
            // toast.error("Please Enter valid username")
            alert("Вelə bir istifadəçi yoxdur")
          } else {
            if (resp.password === password ) {
              // toast.success('Success')
              usenavigate("/");
              console.log(resp.name);
              localStorage.setItem("user", resp.name);
              location.reload();
            } else {
              // toast.error("Please Enter valid credentials")
              alert("Şifrə yanlisdir ")
            }
          }
        })
        .catch((err) => {
          // toast.error('Login Failed due to :' + err.message)
          // alert("Musteri yanlisdir ")
        });
    }
  };
  const [formValid, setFormValid] = useState(false);

  //  useEffect(() => {
  //   const filterYazilar = async () => {
  //     try {
  //       axios.get(localStorage.getItem('languages')==="Aze"? `http://localhost:3300/yazilar`:localStorage.getItem('languages')==="Ru"?` http://localhost:3301/yazilar`:"http://localhost:3302/yazilar").then((e) => {
  //         setYazilarFilter(e.data);
  //       });
  //     } catch (error) {}
  //   };

  //   filterYazilar();
  // }, []);
  useEffect(() => {
    if (UsernameError || passworError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [UsernameError, passworError]);

  const usernameHandler = (e) => {
    if (e.target.value <= 0) {
      setUsernameError("İstifadəçi adı boş ola bilməz");
    } else {
      setUsernameError("");
    }
  };
  const passwordHandler = (e) => {
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPassworError("Parol 3 simvoldan çox və 8 simvoldan az olmalıdır");
    } else {
      setPassworError("");
    }
  };
  const blurHandler = (e) => {
    switch (e.target.name) {
      case "username":
        setUsernameDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };
  return (
    <>
    {/* <div className="Login"> */}
            <form className="from-container" onSubmit={ProceedLogin}>
        <div className="registr-card">
          <h1>Şəxsi Kabinet</h1>
          <div className="registr-card-body">
            <div className="form-container">
              <div className="form-group">
                {/* <label>Müştəri adi <span>*</span></label> */}
                <div className="form">
                  <div className="form-left">
                    <i className="fas fa-user"></i>
                  </div>
                  <div className="form-right">
                    <input
                      placeholder="Müştəri adi"
                      onBlur={(e) => blurHandler(e)}
                      name="username"
                      value={username}
                      onChange={(e) => {
                        usernameupdate(e.target.value), usernameHandler(e);
                      }}
                      className={
                        "form-control" +
                        (UsernameDirty && UsernameError
                          ? " BorderActiveFalse"
                          : " BorderActiveTrue")
                      }
                    ></input>
                  </div>
                </div>

                {UsernameDirty && UsernameError && (
                  <div style={{ color: "red",marginTop:"5px" }}>{UsernameError}</div>
                )}
              </div>
              <div className="form-group">
                {/* <label>Şifrə <span>*</span></label> */}
                <div className="form">
                  <div className="form-left">
                    <i className="fas fa-lock"></i>
                  </div>
                  <div className="form-right">
                    <input
                      placeholder="Şifrə"
                      onBlur={(e) => blurHandler(e)}
                      name="password"
                      type={!eyePassword ?"password":"text"}
                      value={password}
                      onChange={(e) => {
                        passwordupdate(e.target.value), passwordHandler(e);
                      }}
                      className={
                        "form-control" +
                        (passworError && passwordDirty
                          ? " BorderActiveFalse "
                          : " BorderActiveTrue")
                      }
                    >
              
                    </input>
                    <div className="eye">
                        {
                          eyePassword ? (
                            <i onClick={()=>seteyePassword(!eyePassword)} className="fa fa-eye"></i>
                          ):(
                            <i onClick={()=>seteyePassword(!eyePassword)} className="fa fa-eye-slash"></i>
                          )
                        }
                      </div>
                  </div>
                </div>

                {passworError && passwordDirty && (
                  <div style={{ color: "red",marginTop:"5px"  }}>{passworError}</div>
                )}
              </div>
            </div>
          </div>
          <div className="registr-card-footer">
          <button
               
               style={
                 !formValid ? { cursor: "no-drop" } : { cursor: "pointer" }
               }
               disabled={!formValid}
               className="btn btn-primary"
             >
               Daxil Ol
             </button>

            <Link to={"/Regist"} className="btn btn-danger underlineB">
              Qeydiyyat Ol
            </Link>
          </div>
        </div>
      </form>
    {/* </div> */}

    </>
  );
};

export default Login;
