import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Context } from '../index';
import { Row, Modal, Button } from 'react-bootstrap';
import Item from './Item';
import { itemRemove, itemReadAllByCategory } from '../http/itemAPI';

const ItemList = observer(( {modal}) => {
    const { item } = useContext(Context);
    const [confirmModalVisible, setConfirmMoadlVisible] = useState(false);
    const [confirmItem, setConfirmItem] = useState({});

    const deleteItem = async (id) => {
          try {
            const response = await itemRemove(id);
            itemReadAllByCategory(item.selectedCategory.id).then(data => item.setItems(data));
            setConfirmMoadlVisible(false);
          } catch (e) {
            alert(e.response.data.message);
          }
    }

    return (
      <Row className='d-flex'>
        {item.items.map(item =>
            <Item
            setConfirmItem={setConfirmItem}
            setConfirmMoadlVisible={setConfirmMoadlVisible}
            modal={modal}
            key={item.id}
            item={item}
            />
        )}

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
          <p>Вы уверены что хотите удалить товар {confirmItem.name}?
          Действие необратимо!
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => {
            deleteItem(confirmItem.id);
            setConfirmMoadlVisible(false)
          }} variant="primary">Подтвердить</Button>
          <Button onClick={() => setConfirmMoadlVisible(false)} variant="secondary">Закрыть</Button>
        </Modal.Footer>
      </Modal>
      </Row>
    );
});

export default ItemList;
