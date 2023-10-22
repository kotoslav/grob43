import React, { useContext, useEffect, useState } from 'react';
import CategoryCards from '../components/CategoryCards';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { readAllCategory, itemReadAllByCategory } from '../http/itemAPI';
import ItemsList from '../components/ItemList';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ItemBrowse from '../components/modals/ItemBrowse';
import ReactPaginate from 'react-paginate';

const Catalog = observer(() => {
    const { item } = useContext(Context);

    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const [modalShow, setModalShow] = useState(false);
    const [modalItem, setModalItem] = useState({
        id: 0,
        gallery: [],
        article: "",
        description: "",
        price: 0
    });


    useEffect(() => {
        readAllCategory().then(
            data => {
                item.setCategories(data);
                if (!item.selectedCategory.id) {
                    if (searchParams.get("categoryId")) {
                        item.setSelectedCategory({ ...data.find((cat) => cat.id == searchParams.get("categoryId")) });
                    } else {
                        item.setSelectedCategory({ ...data[0] })
                    }
                }
            }
        );
        itemReadAllByCategory(item.selectedCategory.id, item.page).then(
            data => {
                item.setItems(data);
            }
        )
    }, [item.selectedCategory, item.page])

    return (
        <div

        ><div className="menu-brown">
                <header className="header-catalog">
                    <div className="container">
                        <NavBar />
                    </div>
                </header>
            </div>
            <main>
                <section className="catalog">
                    <div className="container">
                        <div className="catalog__title">
                            <div className="title">Каталог товаров</div>
                        </div>
                    </div>
                    <CategoryCards />
                    <div className="container">
                        <ItemsList setModalItem={setModalItem} setModalShow={setModalShow} />
                    </div>

                    {
                        Math.ceil(item.totalCount / item.limit) > 1 && (
                            <div className="catalog__pagination">
                                <div className="pagination">

                                    <ReactPaginate
                                        breakLabel="..."
                                        nextLabel={
                                            <svg className="pagination__svg" width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className="pagination__svg" d="M0.999996 25L13 13L1 1" stroke="#231C1B" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                        }
                                        onPageChange={(e) => { item.setPage(e.selected + 1) }}
                                        pageRangeDisplayed={3}
                                        pageCount={Math.ceil(item.totalCount / item.limit)}
                                        previousLabel={
                                            <svg className="pagination__svg" width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className="pagination__svg" d="M13 0.999999L1 13L13 25" stroke="#231C1B" strokeLinecap="round" stroke-linejoin="round" /></svg>
                                        }
                                        renderOnZeroPageCount={null}
                                        className="mt-5 pagination"
                                        pageClassName="page-item"
                                        activeLinkClassName="pagination__link--active"
                                        pageLinkClassName="pagination__link"
                                        previousClassName="page-item"
                                        previousLinkClassName="pagination__link pagination__link--box"
                                        nextClassName="page-item"
                                        nextLinkClassName="pagination__link pagination__link--box"
                                        marginPagesDisplayed={1}
                                    />


                                </div>
                            </div>
                        )
                    }

                </section>
            </main>
            <ItemBrowse
                modalItem={modalItem}
                modalShow={modalShow}
                setModalShow={setModalShow}
            />
        </div>
    );
});

export default Catalog;
