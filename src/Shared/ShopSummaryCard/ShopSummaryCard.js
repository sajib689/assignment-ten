import React from "react";
import {Container} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import  {useRef} from 'react';
import {useReactToPrint} from 'react-to-print';
const ShopSummaryCard = ({ shop }) => {
  const { _id, title, details, image_url, price } = shop;
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'emp-data',
    onAfterPrint: () => alert('Print Successfully')
  });

  return (
    <div>
      <Container ref={componentRef}>
        
          
          <Row xs={1} md={2} className="g-4 d-flex">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {details}
              </Card.Text>
              <Card.Text>
                <h5>Price: {price}</h5>
              </Card.Text>
             <Link className="btn btn-dark" to={`/shop/${_id}`}> Details</Link>
             <Button onClick={handlePrint}>Download File</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
         
        
      </Container>
    </div>
  );
};

export default ShopSummaryCard;
