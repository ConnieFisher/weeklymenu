import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

const Menu2List = () => {
  return (
    <div>
      <Container fluid>
        <Row style={{ fontWeight: 'bold' }}>
          <Col>Date</Col>
          <Col>Day of the Week</Col>
          <Col>Entre</Col>
          <Col>Vegetable</Col>
          <Col>Starch</Col>
        </Row>
        <Row>
          <Col>3/21/2021</Col>
          <Col>Sunday</Col>
          <Col>Roast</Col>
          <Col>Honey Glazed Carrot</Col>
          <Col>Potatos</Col>
        </Row>
        <Row>
          <Col>3/22/2021</Col>
          <Col>Monday</Col>
          <Col>Out</Col>
          <Col>Chris' Last Dinner</Col>
          <Col> at Home</Col>
        </Row>
        <Row>
          <Col>3/23/2021</Col>
          <Col>Tuesday</Col>
          <Col>Chicken and Wine Sauce</Col>
          <Col>Green Beans</Col>
          <Col>Baghette</Col>
        </Row>
        <Row>
          <Col>3/24/2021</Col>
          <Col>Wednesday</Col>
          <Col>Baked Pork</Col>
          <Col>Apple Sauce</Col>
          <Col>Noodles</Col>
        </Row>
        <Row>
          <Col>3/25/2021</Col>
          <Col>Thursday</Col>
          <Col>Chicken Stir Fry</Col>
          <Col>Pepper and Pineapple</Col>
          <Col>Ramen Noodles</Col>
        </Row>
        <Row>
          <Col>3/26/2021</Col>
          <Col>Friday</Col>
          <Col>Pizza</Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>3/27/2021</Col>
          <Col>Saturday</Col>
          <Col>Out for Dinner</Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Menu2List
