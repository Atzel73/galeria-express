import React, { CSSProperties } from "react";
import "./Loading.css";
import ClipLoader from "react-spinners/ClipLoader";
import LoadingIcon from "../LoadingIcon/LoadingIcon"
const LoadingScreen: React.FC = () => {
  const [color, setColor] = React.useState("#ffffff");

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "blue",
  };

  return (
    <div className="container">
      <p>Cargando...</p>
      <LoadingIcon />
    </div>
  );
};

export default LoadingScreen;
