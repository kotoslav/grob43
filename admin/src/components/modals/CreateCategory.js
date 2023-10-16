import React, { useContext } from 'react';
import { Form, ModalDialog, Modal, Button } from 'react-bootstrap';
import CategoryForm from '../CategoryForm';

const CreateCategory = ( {show, onHide, modalCategory, setModalCategory} ) => {
    let category = JSON.parse(JSON.stringify(modalCategory));
    let newCat = (category.title == undefined);
    let state = newCat ? {
        title: "",
        description: "",
        imgPath: ""
    } : category;


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
        { newCat ? "Создание новой категории" : "Редактирование существующей категории - "+ state.title }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CategoryForm state={modalCategory} setModalCategory={setModalCategory}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outline-success'} onClick={() => {setModalCategory(state)}}>Сохранить</Button>
        <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
    );
};

export default CreateCategory;
