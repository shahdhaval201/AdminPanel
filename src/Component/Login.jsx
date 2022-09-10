import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";




const Login = () => {
  
  const [formvalue, setFormData] = useState({
    email: "",
    password: "",
    returnSecureToken: ""
  });
  console.log(formvalue);

  //const [allData, setAllData] = useState([]);
  //console.log("data", allData);

  function FormData(e) {
    setFormData({
      ...formvalue,
      [e.target.name]: e.target.value,returnSecureToken:true
    });
  }
  const NewRedirect = useNavigate();

  function SubmitForm(e) {
    e.preventDefault();
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBp6Ln53_pfs0P32BGa3cj92p0yyReJaTc`,
      {
        method: "POST",
        body: JSON.stringify(formvalue),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        //setAllData([...allData, formvalue]);
        //setFormData({ email: "", password: "" });
        if (data.registered) {
          Swal.fire("Login!", "Login successfully!", "success");
          NewRedirect("/Dashboard");
          
        } else {
          Swal.fire("Login!", "Login Failed!", "fail");
        }
      });
  }

  return (
    <div class="bg-gradient-primary">
      <div className="container">
        {/* Outer Row */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            value={formvalue.email}
                            onChange={FormData}
                            name="email"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            value={formvalue.password}
                            onChange={FormData}
                            name="password"
                            className="form-control form-control-user"
                            id="password"
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <button
                          className="btn btn-primary btn-user btn-block"
                          onClick={SubmitForm}
                        >
                          Login
                        </button>
                        <hr />
                        <a
                          href="index.html"
                          className="btn btn-google btn-user btn-block"
                        >
                          <i className="fab fa-google fa-fw" /> Login with
                          Google
                        </a>
                        <a
                          href="index.html"
                          className="btn btn-facebook btn-user btn-block"
                        >
                          <i className="fab fa-facebook-f fa-fw" /> Login with
                          Facebook
                        </a>
                      </form>
                      <hr />
                      <div className="text-center">
                        <a className="small" href="forgot-password.html">
                          Forgot Password?
                        </a>
                      </div>
                      <div className="text-center">
                        <a className="small" href="register.html">
                          Create an Account!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
