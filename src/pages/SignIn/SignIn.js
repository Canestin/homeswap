import React, { useState } from "react";
import Header from "../../components/Header/Header";
import styles from "./SignIn.module.scss";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    api
      .post("/signup", {
        email: "ndong.mboula@gmail.com",
        firstName: "Mboula",
        lastNamr: "Ndong",
      })
      .then((res) => {
        if (res.status === 401) {
          toast.error("nom d'utilisateur ou mot de passe incorrecte");
        }
        if (res.status !== 200 && res.status !== 401) {
          toast.success("🦄 Wow so easy!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        return res;
      })
      .then((json) => {
        // setOnConnect(true);
        toast.success("🦄 connextion réussie !", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/");
      })
      .catch((err) => {
        if (err.response.status === 401) {
          toast.error("nom d'utilisateur ou mot de passe incorrecte");
        } else {
          navigate("/");
          toast.error("Application indisponible");
        }
        console.error(err.response);
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>Sign In</h1>
        <h3>And make your home profitable</h3>

        <div>
          <form className={styles.signupForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <span>No account ?</span>{" "}
            <span
              style={{
                color: "#006bb7",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
      {/* 
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="email">
            <b>Email Address</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email Address"
            name="email"
            id="email"
            required
            onChange={handleEmailChange}
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            required
            onChange={handlePasswordChange}
          />
          <p>
            {" "}
            <a href="Reset Password">Reset Password</a>.
          </p>

          <button type="submit" className="Loginbtn">
            Login
          </button>

          <div className="container SignUp">
            <p>
              Don't have an account? <a href="SignUp">Sign Up</a>
            </p>
          </div>
        </div>
      </form> */}
    </>
  );
}
export default LoginForm;
