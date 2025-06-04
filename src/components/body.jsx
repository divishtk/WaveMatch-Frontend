import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./navbar";
import Footer from "./footer";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const getUser = async () => {
    if (userData) return;
    try {
      const resp = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(resp.data));
    } catch (error) {
      if (error.status === 401) {
        navigate("/login");
      }
      console.log("Error while getting profile", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
