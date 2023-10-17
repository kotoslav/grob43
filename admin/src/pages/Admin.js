import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { Button, Col, Container, Row } from 'react-bootstrap';
import CategoriesBar from '../components/CategoriesBar';
import ItemList from '../components/ItemList';
import CreateCategory from '../components/modals/CreateCategory';
import CreateItem from '../components/modals/CreateItem';


const Admin = () => {
    const [categoryVisible, setCategoryVisible] = useState(false);
    const [itemVisible, setItemVisible] = useState(false);
    const [modalCategory, setModalCategory] = useState({});
    const [modalItem, setModalItem] = useState({});
    return (
        <div className='bg-secondary' style={{minHeight:"100vh"}}>
            <NavBar />
            <Container>
                <Row className='mt-2'>
                    <Col md={3}>
                    <CategoriesBar
                    modal={{categoryVisible, setCategoryVisible, modalCategory, setModalCategory}}
                    />
                    </Col>
                    <Col md={9}>
                    <Button
                    variant={'outline-light'}
                    onClick={() => {
                        setItemVisible(true);
                        setModalItem({});
                    }}
                    >Добавить новый товар</Button>
                    <ItemList
                    modal={{setModalItem, setItemVisible}}
                    />
                    </Col>
                </Row>
                <CreateCategory
                modalCategory={modalCategory}
                setModalCategory={setModalCategory}
                show={categoryVisible}
                onHide={() => setCategoryVisible(false)} />
                <CreateItem
                modalItem={modalItem}
                setModalItem={ setModalItem}
                show={itemVisible}
                onHide={() => setItemVisible(false)}/>
            </Container>
        </div>
    );
};


export default Admin;