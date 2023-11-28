import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import "./ApiDocs.css";
import petshopApiDoc from "../../assets/petshop-swagger-api-docs.json";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TailwindHeader from "./components/tailwindHeader";

const DUMMY_ACCESS_TOKEN = "ThisIsDummyAccesToken"

export default function ApiDocs() {
  
  const navigate = useNavigate();
    useEffect(() => {
      var token = localStorage.getItem("access_token");
      if (token != DUMMY_ACCESS_TOKEN) {
        alert("Authorization needed")
        navigate("/login");
      }
    });

  const logoutHandler = () => {
    localStorage.clear()
    navigate("/login")
  }

  return (
    <div className="bg-white h-full pt-5 overflow-auto">
      <TailwindHeader LogoutButtonFn={logoutHandler}/>
      <SwaggerUI spec={petshopApiDoc} />
    </div>
  );
}
