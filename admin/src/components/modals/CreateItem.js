import {React, useContext} from 'react';
import { Form, ModalDialog, Modal, Button } from 'react-bootstrap';
import ItemForm from "../ItemForm";
import { Context } from '../../index';

const CreateItem = ( {show, onHide, modalItem, setModalItem} ) => {
    const { item } = useContext(Context);
    let itemM = JSON.parse(JSON.stringify(modalItem));
    let newItem = (itemM.name === undefined);
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
      <ItemForm state={modalItem} category={{selectedCategory: item.selectedCategory, categories: item.categories }} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outline-success'} onClick={onHide}>Сохранить</Button>
        <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
    );
};

export default CreateItem;
