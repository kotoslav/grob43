import React, { useContext } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { useHistory, useLocation } from 'react-router-dom';
import { CATALOG_ROUTE } from '../utils/consts';
import handlerScrollUp from '../utils/scrollUp';



const CatalogCardsOnMainPage = observer( () => {
    const {item} = useContext(Context);
    const history = useHistory();
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);

    return (
        <div className="menu-icon__content">
        {item.categories.map( (card) => {
            searchParams.set("categoryId", card.id);
            let cardRoute = CATALOG_ROUTE + "?" + searchParams;
            return (
            <div className="menu-icon__column" key={card.id}>
                <a className="menu-icon__link" href={cardRoute} onClick={e => {
                    e.preventDefault();
                    item.setPage(1);
                    item.setSelectedCategory(card);
                    history.push(cardRoute);
                    handlerScrollUp();
                }}>
                    <div className="menu-icon__block">
                        <img className="menu-icon__img" src={process.env.REACT_APP_API_URL + card.imgPath} alt={"Иконка " + card.title } />
                    </div>
                    <div className="menu-icon__subtittle"><h4>{card.title}</h4></div>
                </a>
            </div>
        )
        }
        )}

        </div>
    )
});

export default CatalogCardsOnMainPage;
