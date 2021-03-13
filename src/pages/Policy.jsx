import React, {useEffect} from "react";
import {API_GET_POLICY} from "../apis";
import {useNavigate} from "react-router-dom";

const Policy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    API_GET_POLICY();
    navigate('/');
  }, []);

  return <div></div>;
};
export default Policy;
