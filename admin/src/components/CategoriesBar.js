import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { ListGroup } from 'react-bootstrap';

const CategoriesBar = observer(() => {
    const { item } = useContext(Context);
    return (
      <ListGroup>
        {item.categories.map( cat =>
          <ListGroup.Item
            style={{cursor:"pointer"}}
            key={cat.id}
            active={cat.id === item.selectedCategory.id}
            onClick={() => item.setSelectedCategory(cat)}
          >
            {cat.title}
          </ListGroup.Item>
        )}
        <ListGroup.Item
          style={{cursor:"pointer"}}
        >
          Создать новую категорию
        </ListGroup.Item>
      </ListGroup>
    );
});

export default CategoriesBar;
