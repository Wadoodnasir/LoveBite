import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
const Cards = (props) => {
  return (
    <Card
      style={{
        width: "auto",
      }}
    >
      <CardBody>
        <CardTitle tag="h5" className=" text-center fs-3 p-0">
          {props.title}
        </CardTitle>
      </CardBody>
      <img alt="Card cap" src={props.src} width="200px" className="img-style" />
      <CardBody>
        <CardText className=" text-center fw-bolder fst-italic text-danger">
          {props.detail}
        </CardText>
      </CardBody>
    </Card>
  );
};
export default Cards;
