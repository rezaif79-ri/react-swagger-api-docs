import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export default function ApiDocs() {
  return (
    <div className="App bg-white h-full pt-5 overflow-auto">
     <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />
    </div>
  )
}
