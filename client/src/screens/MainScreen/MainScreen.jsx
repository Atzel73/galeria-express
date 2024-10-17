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

function MainScreen() {
  const [data, setData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    fetch("/carta")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setIsError(false);
        console.log("Data fetched successfully:", data);
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
    <Container>
      <Row>
        {/* {data &&
          data.map((item, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="d-flex justify-content-center"
            >
              {" "}
              <Card style={{ width: "100%", marginBottom: "20px" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{item.username}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Editar</Button>
                </Card.Body>
              </Card>
            </Col>
          ))} */}
      </Row>
    </Container>
  );
}

export default MainScreen;
