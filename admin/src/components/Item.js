import React from 'react';
import { Card, Col, Image,  CloseButton } from 'react-bootstrap';


const Item = ({item, modal, setConfirmItem, setConfirmMoadlVisible }) => {

    return (
        <Col md={4}>
            <Card
            style={{width: '100%', height: 250, cursor: 'pointer', margin: '10px 0'}}
            border={'light'}
            onClick={() => {
                modal.setModalItem(item);
                modal.setItemVisible(true);
            }}
            >
            <Image src={process.env.REACT_APP_API_URL  + item.gallery[0]} style={{objectFit: 'cover', width: '100%', height: '100%' }} />
            <CloseButton
            style={{position: 'absolute', top: 5, right: 10, fontSize: 32 }} className={'text-danger'}
            onClick={(e)=> {
                e.stopPropagation();
                setConfirmItem(item);
                setConfirmMoadlVisible(true);
            }}  />
            <div style={{position: 'absolute', bottom: 0, width: '100%', minHeight: 150, opacity: 0.9 }} className={"text-light bg-dark"}>
               Артикул = {item.article} <br/>
               Наименование = {item.name} <br/>
               Цена = {item.price}
            </div>
            </Card>
        </Col>
    );
};

export default Item;
