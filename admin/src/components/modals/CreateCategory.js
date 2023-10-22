import React, { useContext, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CategoryForm from '../CategoryForm';
import { categoryCreateOne, readAllCategory, categoryUpdate } from '../../http/itemAPI';
import { Context } from '../../index';

const CreateCategory = ({ show, onHide, modalCategory, setModalCategory }) => {
    const { item } = useContext(Context)

    let category = JSON.parse(JSON.stringify(modalCategory));
    let newCat = (category.title === undefined);
    let state = newCat ? {
        title: "",
        description: "",
        imgPath: ""
    } : category;
    let [form, setForm] = useState({});
    let [validForm, setValidForm] = useState(true)

    const sendForm = async () => {
        if (newCat) {
            try {
                await categoryCreateOne(form);
                readAllCategory().then(data => {
                    item.setCategories(data);
                    if (!item.selectedCategory.id) item.setSelectedCategory({...data[0]})
                });
                onHide();
            } catch (e) {
                alert(e.response.data.message);
            }
        } else {
            try {
                await categoryUpdate(form, modalCategory.id);
                readAllCategory().then(data => item.setCategories(data));
                onHide();
            } catch (e) {
                alert(e.response.data.message);
            }
        }

    }


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
                    {newCat ? "Создание новой категории" : "Редактирование существующей категории - " + state.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CategoryForm
                    state={state}
                    setModalCategory={setModalCategory}
                    setForm={setForm}
                    setValidForm={setValidForm}
                />
            </Modal.Body>
            <Modal.Footer>
                {Object.keys(form) !== 0 && validForm ?
                    <Button variant={'outline-success'} onClick={() => {
                        if (category.id) {
                            form = { ...form, id: category.id };
                        };
                        sendForm();
                        setForm({})
                    }} >Сохранить</Button>
                    :
                    <Button variant={'outline-success'} onClick={() => { console.log(form); setForm({}) }} disabled>Сохранить</Button>}
                <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateCategory;
