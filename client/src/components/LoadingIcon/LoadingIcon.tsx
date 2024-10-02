import React from "react";
import { useLoading } from "@agney/react-loading";
import { Audio } from "@agney/react-loading"


const LoadingIcon: React.FC = () => {


  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Audio width="50" />,
  });
  return <section {...containerProps}>{indicatorEl}</section>;
}

export default LoadingIcon;
