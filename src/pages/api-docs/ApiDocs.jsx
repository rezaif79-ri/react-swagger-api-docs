import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import "./ApiDocs.css"
import petshopApiDoc from "../../assets/petshop-swagger-api-docs.json"


export default function ApiDocs() {
  const spec = {
    swagger: "2.0"
  }
  return (
    <div className="bg-white h-full pt-5 overflow-auto">
     <SwaggerUI spec={petshopApiDoc}/>
    </div>
  )
}
