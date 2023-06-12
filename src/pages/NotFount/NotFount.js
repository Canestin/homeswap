import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  //   useEffect(() => {
  //     setTimeout(() => {
  //       navigate("/");
  //     }, 2000);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "black",
        marginTop: 20,
      }}
    >
      <h1 style={{ marginBottom: 50, fontSize: 45 }}>Page not found</h1>
      {/* <p style={{ fontSize: 30 }}>Redirecting to the home page...</p> */}
      <Link style={{ marginTop: 50, fontSize: 20 }} to="/">
        Go to Home Page
      </Link>
    </div>
  );
}
export default NotFound;
