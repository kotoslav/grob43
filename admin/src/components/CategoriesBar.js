import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Context } from '../index';
import { Button, ListGroup, CloseButton, Modal } from 'react-bootstrap';
import { categoryRemove, readAllCategory } from '../http/itemAPI';

const CategoriesBar = observer(({modal}) => {
    const { item } = useContext(Context);
    const [confirmModalVisible, setConfirmMoadlVisible] = useState(false);
    const [confirmCat, setConfirmCat] = useState({});

    const deleteCategory = async (id) => {
      try {
        const response = await categoryRemove(id);
        readAllCategory().then(data => item.setCategories(data));
        item.setSelectedCategory(item.categories[0]);
      } catch (e) {
        alert(e.response.data.message);
      }
    }

    return (
      <ListGroup>
        {item.categories.map( cat =>
          <ListGroup.Item
            className={"d-flex"}
            style={{cursor:"pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
            key={cat.id}
            active={cat.id === item.selectedCategory.id}
            onClick={() => item.setSelectedCategory(cat)}

          >
          <div
          style={{
            wordBreak: "break-all",
            flexShrink: 2
          }}
          >
            {cat.title}
          </div>
          <div
            className={'d-flex flex-column'}
            style={{
              width: 37,
              flexShrink: 0
            }} >
            <Button
             className='border-light'
             onClick={() => {modal.setCategoryVisible(true); modal.setModalCategory(cat)}}
            >

            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className={"bi bi-pencil-fill"} viewBox="0 0 16 16">
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
            </svg>
            </Button>
            <Button
             className='bg-light btn-outline-danger'
             onClick={() => {
               setConfirmCat(cat);
               setConfirmMoadlVisible(true)
            }}
            >

            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className={"bi bi-trash-fill"} viewBox="0 0 16 16">
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
            </svg>
            </Button>
             </div>
          </ListGroup.Item>
        )}
        <ListGroup.Item
          style={{cursor:"pointer"}}
          onClick={() => {modal.setCategoryVisible(true); modal.setModalCategory({})}}
        >
          Создать новую категорию
        </ListGroup.Item>

        <Modal
          show={confirmModalVisible}
          onHide={() => setConfirmMoadlVisible(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
        <Modal.Header closeButton>
          <Modal.Title>Удаление категории</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Вы уверены что хотите удалить категорию {confirmCat.title}?
          Все товары относящиеся к данной категории будут так же удалены!
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => {
            deleteCategory(confirmCat.id);
            setConfirmMoadlVisible(false)
          }} variant="primary">Подтвердить</Button>
          <Button onClick={() => setConfirmMoadlVisible(false)} variant="secondary">Закрыть</Button>
        </Modal.Footer>
      </Modal>
      </ListGroup>
    );
});

export default CategoriesBar;
