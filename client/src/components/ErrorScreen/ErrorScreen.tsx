import React from "react";
import "./Error.css";
const ErrorScreen: React.FC = () => {
  return (
    <div className="container">
      <p className="error-text">Error al traer los datos</p>
    </div>
  );
};

export default ErrorScreen;
