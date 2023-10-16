import React from 'react';
import { Form, ModalDialog, Modal, Button } from 'react-bootstrap';

const CreateItem = ( {show, onHide, item} ) => {
    let newItem = (item === undefined);

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
      <Form>
        <Form.Control />
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outline-success'} onClick={onHide}>Сохранить</Button>
        <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
    );
};

export default CreateItem;
