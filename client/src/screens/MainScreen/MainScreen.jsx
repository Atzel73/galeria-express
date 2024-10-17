import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MainScreen.css";
import LoadingScreen from "../../components/LoadingScreen";
import ErrorScreen from "../../components/ErrorScreen/index";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import getData from "../../functions/GetData";
import Product from "../Product";
function MainScreen() {
  const [data, setData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData();
        setData(response);
        setIsLoading(false);
        setIsError(false);
        console.log("Data fetched successfully:", response);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setIsError(true);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <Container>
      <Row>
        {data &&
          data.map((item, index) => (
            <Col
              key={index}
              xs={16}
              sm={6}
              md={4}
              lg={3}
              className="d-flex justify-content-center card-item"
            >
              {" "}
              <Product item={item} />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default MainScreen;
