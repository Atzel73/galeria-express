import React from "react";
import "./MainScreen.css";
import LoadingScreen from "../../components/LoadingScreen";
import ErrorScreen from "../../components/ErrorScreen/index";
function MainScreen() {
  const [data, setData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    fetch("/message")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }
  return (
    <div className="container">
      {data && data.map((item, index) => <p key={index}>{item.username}</p>)}
    </div>
  );
}

export default MainScreen;
