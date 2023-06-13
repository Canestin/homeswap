import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import styles from "./SignUp.module.scss";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import api from "../../services/api";

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordMatches, setPasswordMatches] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (password === confirmPassword) {
      setPasswordMatches(true);
    } else {
      setPasswordMatches(false);
    }
  }, [password, confirmPassword]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "PayLoad",
      JSON.stringify({
        email,
        firstName,
        lastName,
        password,
      })
    );

    api
      .post("/user/signup", {
        email,
        firstName,
        lastName,
        password,
      })
      .then((res) => {
        if (res.status === 401) {
          toast("incorrect username or password", { type: "error" });
        }
        if (res.status !== 200 && res.status !== 401) {
          toast("app unavailable", { type: "error" });
        }
        return res;
      })
      .then((json) => {
        // setOnConnect(true);
        toast("successful registration", { type: "success" });
        setTimeout(() => navigate("/addhouse"), 1500);
      })
      .catch((err) => {
        if (err.response.status === 400) {
          toast("user already exist", { type: "error" });
        } else if (err.response.status === 401) {
          toast("incorrect username or password", { type: "error" });
        } else {
          // navigate("/");
          toast("app unavailable", { type: "error" });
        }
        console.error(err.response);
      });
  };

  return (
    <>
      <Header />
      <ToastContainer position="top-right" newestOnTop />
      <div className={styles.container}>
        <h1>Sign Up</h1>
        <h3>And make your home profitable</h3>

        <div>
          <form className={styles.signupForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="firstname">Firstname</label>
              <input
                type="text"
                id="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lastname">Lastname</label>
              <input
                type="text"
                id="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
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
            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            {!passwordMatches && !!password && !!confirmPassword && (
              <p style={{ marginBottom: 10, color: "red" }}>
                passwords do not match
              </p>
            )}
            <span>Already an account ?</span>{" "}
            <span
              style={{
                color: "#006bb7",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => navigate("/signin")}
            >
              Sign In
            </span>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
