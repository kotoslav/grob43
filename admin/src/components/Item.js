import React from 'react';
import { Card, Col } from 'react-bootstrap';


const Item = ({item}) => {
    return (
        <Col md={3}>
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
               id = {item.id} <br/>
               name = {item.name}
            </Card>
        </Col>
    );
};

export default Item;
