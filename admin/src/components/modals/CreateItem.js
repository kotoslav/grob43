import {React, useContext, useState } from 'react';
import { Form, ModalDialog, Modal, Button } from 'react-bootstrap';
import ItemForm from "../ItemForm";
import { Context } from '../../index';

const CreateItem = ( {show, onHide, modalItem, setModalItem} ) => {
    const { item } = useContext(Context);
    let itemM = JSON.parse(JSON.stringify(modalItem));
    let newItem = (itemM.name === undefined);
    const skelForm = {
      name: "",
      description: "",
      article: "",
      price: "",
      categoryId: "",
      gallery: []
    };
    modalItem = newItem ? skelForm : modalItem;
    let [form, setForm] = useState({ });

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
      <ItemForm state={modalItem} category={{selectedCategory: item.selectedCategory, categories: item.categories }} setForm={setForm} />
      </Modal.Body>
      <Modal.Footer>
       { Object.keys(form) != 0 ?
         <Button variant={'outline-success'} onClick={() => {
          if (itemM.id) {
             form = {...form, id: itemM.id};
          };
           console.log(form);
           setForm({})}} >Сохранить</Button>
         :
         <Button variant={'outline-success'} onClick={() => {console.log(form); setForm(skelForm)}} disabled>Сохранить</Button> }
        <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
    );
};

export default CreateItem;
