import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";
import  {useRef} from 'react';
import {useReactToPrint} from 'react-to-print';
const Shop = () => {
  const shop = useLoaderData();
  const { title, category_id, details, image_url, total_view, price } = shop;
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'emp-data',
    onAfterPrint: () => alert('Print Successfully')
  });
  return (
    <div className="mt-5 ms-5">
      <Card ref={componentRef}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <div>
            <Card.Title>{title}</Card.Title>
            <Card.Title>Total View: {total_view}</Card.Title>
          </div>
          <h5>Price: {price}</h5>
          <Card.Text>{details}</Card.Text>

          <Link to={`/category/${category_id}`}>
            <Button variant="primary">All product in this category</Button>
           
          </Link>
          <Button onClick={handlePrint}>Download File</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Shop;
