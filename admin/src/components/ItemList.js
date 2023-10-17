import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { Row } from 'react-bootstrap';
import Item from './Item';

const ItemList = observer(( {modal}) => {
    const { item } = useContext(Context);
    return (
      <Row className='d-flex'>
        {item.items.map(item =>
            <Item
            modal={modal}
            key={item.id}
            item={item}
            />
        )}
      </Row>
    );
});

export default ItemList;
