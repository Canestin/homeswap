import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function AddHouse() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    navigate("type");
  }, []);
  return <Outlet />;
}

export default AddHouse;
