import React, { useContext } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { useHistory, useLocation } from 'react-router-dom';
import { CATALOG_ROUTE } from '../utils/consts';




const CategoryCards = observer(() => {
    const { item } = useContext(Context);
    const history = useHistory();
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);

    return (
        <div className="catalog__menu">
            <nav className="catalog__nav">
                <ul className="catalog__list">
                    {item.categories.map((cat) => {
                        //searchParams.set("categoryId", cat.id);
                        let catRoute = CATALOG_ROUTE + "?" + "categoryId=" + cat.id;
                        return (<li className="catalog__item-menu" key={cat.id}>
                            <a
                                className={`catalog__link ${cat.id === item.selectedCategory.id ? 'catalog__link-active' : ""}`}
                                href={catRoute}
                                onClick={e => {
                                    e.preventDefault();
                                    item.setPage(1);
                                    item.setSelectedCategory(cat);
                                    history.replace(catRoute)

                                }}
                            >
                                {cat.title}
                            </a>
                        </li>)
                    }

                    )}

                </ul>
            </nav>
        </div>
    )
});

export default CategoryCards;
