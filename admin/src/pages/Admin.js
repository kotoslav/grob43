import React from 'react';
import NavBar from '../components/NavBar';
import { Col, Container, Row } from 'react-bootstrap';
import CategoriesBar from '../components/CategoriesBar';
import ItemList from '../components/ItemList';


const Admin = () => {

    return (
        <div className='bg-secondary' style={{minHeight:"100vh"}}>
            <NavBar />
            <Container>
                <Row className='mt-2'>
                    <Col md={3}>
                    <CategoriesBar />
                    </Col>
                    <Col md={9}>
                    <ItemList />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Admin;
