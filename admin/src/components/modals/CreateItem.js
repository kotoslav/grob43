import React from 'react';
import { Form, ModalDialog, Modal, Button } from 'react-bootstrap';
import ItemForm from "../ItemForm";

const CreateItem = ( {show, onHide, modalItem, setModalItem} ) => {
    let item = JSON.parse(JSON.stringify(modalItem));
    let newItem = (item.name === undefined);

    return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        { newItem ? "Создание нового товара" : "Редактирование существующего товара" }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <ItemForm state={modalItem} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outline-success'} onClick={onHide}>Сохранить</Button>
        <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
    );
};

export default CreateItem;
