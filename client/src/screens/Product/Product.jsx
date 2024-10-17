import React from "react";
import Button from "react-bootstrap/Button";
import "./productStyles.css";
const Product = ({ item }) => {
  return (
    <section className="product-container">
      <div className="product-card">
        <h1>{item.plato}</h1>
        <div className="product-body">
          <p>${item.precio}</p>
          <p>{item.descripcion}</p>
        </div>
        <div className="product-footer">
          <Button variant="dark">Editar</Button>
          <Button variant="dark">Ver mas</Button>
        </div>
      </div>
    </section>
    // <CardGroup>
    //   <Card>
    //     <CardContent>
    //       <CardHeader>{item.plato}</CardHeader>
    //       <CardMeta>{item.precio}</CardMeta>
    //       <CardDescription>{item.descripcion}</CardDescription>
    //       <CardContent extra>
    //         <div className="ui two buttons">
    //           <Button basic color="green">
    //             Editar
    //           </Button>
    //           <Button basic color="red">
    //             Ver mas
    //           </Button>
    //         </div>
    //       </CardContent>
    //     </CardContent>
    //   </Card>
    // </CardGroup>
  );
};
export default Product;
