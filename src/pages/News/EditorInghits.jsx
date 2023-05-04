import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img1 from '../../assets/editorsInsight1.png'
import img2 from '../../assets/editorsInsight3.png'
import img3 from '../../assets/editorsInsight2.png'

const EditorInghits = () => {
    return (
        <Row xs={1} md={2} lg={3} className="g-4">

            <Col>
                <Card>
                    <Card.Img variant="top" src={img1}></Card.Img>
                    <Card.Body>
                        <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                        
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img3} />
                    <Card.Body>
                        <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )};

export default EditorInghits;