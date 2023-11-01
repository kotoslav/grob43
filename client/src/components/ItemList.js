import React, { useContext } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { useHistory, useLocation } from 'react-router-dom';

import { CATALOG_ROUTE } from '../utils/consts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useScrollLock } from './useScrollLock';

//import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


const ItemsList = observer(({ setModalItem, setModalShow }) => {
    const { item } = useContext(Context);
    const history = useHistory();
    const {lockScroll} = useScrollLock();
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);

    return (
        <div className="catalog__items">
            {item.items.map((itemCard) =>
                <article

                    className="catalog__item item-catalog"
                    key={itemCard.id}
                    onClick={() => {
                        setModalItem(itemCard);
                        setModalShow(true);
                        searchParams.set('item', itemCard.id);
                        history.replace('/catalog' + '?' + searchParams);
                        lockScroll();
                    }}
                >
                    <div className="item-catalog__block">
                        <div className="item-catalog__img">
                        { itemCard.gallery[0]?  <img src={process.env.REACT_APP_API_URL + itemCard.gallery[0]} alt="Фотография товара" /> : <div></div>}


                        </div>
			<div className="item-catalog__body">
                            <div className="item-catalog__content">
                                <h6 className="item-catalog__title">{itemCard.name}</h6>
                            </div>
                            <h5 class="title-card__article">Артикул: {itemCard.article}</h5>
                            <div className="item-catalog__prices">
                                <div className="item-catalog__price">{itemCard.price}</div>
                                <div className="item-catalog__currency">руб.</div>
                            </div>
                            <div className="item-catalog__quantity">
                                <p className="item-catalog__text">Цена за 1 шт.</p>
                            </div>
                        </div>
                    </div>
                </article>
            )}

        </div>
    )
});

export default ItemsList;
