import React, { useRef, useState, useEffect } from 'react';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Controller, FreeMode, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { useScrollLock } from '../useScrollLock';
import { useLocation, useHistory } from 'react-router-dom';

SwiperCore.use([Controller]);


const ItemBrowse = ({ modalItem, modalShow, setModalShow }) => {
    const swiperRefControl = useRef(null);
    const swiperRef = useRef(null);
    const thumbnailRef = useRef(null);
    const [lightBoxOpen, setLightBoxOpen] = useState(false);
    const [lightBoxSrc, setLightBoxSrc] = useState(null);
    const {lockScroll, unlockScroll} = useScrollLock();

    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const history = useHistory();


    useEffect(() => {
      const gallerySwiper = swiperRef.current.swiper;
      const thumbnailSwiper = thumbnailRef.current.swiper;
      if (gallerySwiper.controller && thumbnailSwiper.controller
      ) {
        gallerySwiper.controller.control = thumbnailSwiper;
        thumbnailSwiper.controller.control = gallerySwiper;
      }
    }, []);

    return (
        <div
            className={`modal-card ${modalShow ? 'open' : ''}`}
            onClick={() =>
                {
                        if (!lightBoxOpen){
                            setModalShow(false);
                            unlockScroll();
                            searchParams.delete('item');
                            history.replace('/catalog?' + searchParams );

                        }
                        }
            }
            id="modal-product"
        >
            <div className="modal-card__box" onClick={(e) => e.stopPropagation()}>
                <button className="modal-card__close-btn" id="close-modal-product-btn" onClick={
                    () =>
                    {
                        setModalShow(false);
                        unlockScroll();
                        searchParams.delete('item');
                        history.replace('/catalog?' + searchParams );

                    }
                }>
                    <svg className="modal-card__svg" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="modal-card__svg" d="M29.5 2L2 29.5" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <path className="modal-card__svg" d="M2 2L29.5 29.5" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <div className="modal-card__content">
                    <div className="modal-card__carousel carousel-card">
                        <div className="carousel-card__block">
                            <div className="carousel-card__images" style={{ position: "relative" }}>
                                <div className="carousel-card__top top-img">
                                    <Swiper
                                        style={{ height: '100%' }}
                                        slidesPerView={1}

                                        onSwiper={(swiper) => {
                                            swiperRefControl.current = swiper;
                                        }}

                                        ref={swiperRef}

                                        //controller={{ control: secondSwiper }}
                                    >
                                        <div className="top-img__image">

                                            {
                                                modalItem.gallery.map(img =>
                                                    <SwiperSlide key={img} >
                                                        <div className={'top-img__image'}>
                                                            <img src={process.env.REACT_APP_API_URL + img}
                                                                className={'top-img__img'}
                                                                onClick={() => {
                                                                    setLightBoxSrc(process.env.REACT_APP_API_URL + img);
                                                                    setLightBoxOpen(true);
                                                                    lockScroll();
                                                                }}
                                                            />
                                                        </div>
                                                    </SwiperSlide>

                                                )
                                            }

                                        </div>


                                    </Swiper>

                                    {modalItem.gallery.length>1 ?
                                        <>
                                        <button className="top-img__btn-right"
                                        onClick={() => swiperRefControl.current.slideNext()}

                                    ><svg className="top-img__btn" width="23" height="42" viewBox="0 0 23 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="top-img__btn" d="M1.99999 40L21 21L2 2" stroke="#231C1B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>

                                    <button className="top-img__btn-left"
                                        onClick={() => swiperRefControl.current.slidePrev()}
                                    ><svg className="top-img__btn" width="23" height="42" viewBox="0 0 23 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="top-img__btn" d="M21 2L2 21L21 40" stroke="#231C1B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                        </>
                                        :
                                        ""
                                    }


                                </div>

                                <div className="carousel-card__bottom bottom-img">

                                    <Swiper
                                        slidesPerView={'auto'}
                                        spaceBetween={10}
                                        centeredSlides={true}
                                        slideToClickedSlide={true}
                                        slidesPerView={ modalItem.gallery.length >= 3 ? 3 : 2}
                                        ref={thumbnailRef}
                                    >

                                        { modalItem.gallery.length>1 && modalItem.gallery.map(img =>
                                            <SwiperSlide key={img}>
                                                <div className={"bottom-img__bg"} >
                                                    <img className="bottom-img__image" src={process.env.REACT_APP_API_URL + img} alt="Фотография товара" />
                                                </div>
                                            </SwiperSlide>
                                        )}


                                    </Swiper>

                                </div>


                            </div>
                        </div>
                    </div>
                    <article className="modal-card__item item-card">
                        <div className="item-card__block">
                            <div className="item-card__body">
                                <div className="item-card__title title-card">
                                    <h3 className="title-card__title">{modalItem.name}</h3>
                                    <h5 className="title-card__article">Артикул: {modalItem.article}</h5>
                                </div>
                                <div className="item-card__description description-card">
                                    <div className="description-card__title">
                                        <h6 className="description-card__title-text">Описание товара</h6>
                                    </div>
                                    <div className="description-card__content">
                                        <p className="description-card__text" style={{ whiteSpace: "pre-wrap" }}>{modalItem.description}</p>
                                    </div>
                                </div>
                                <div className="item-card__prices prices-card">
                                    <div className="prices-card__prices">
                                        <div className="prices-card__price">{modalItem.price}</div>
                                        <div className="prices-card__currency">руб.</div>
                                    </div>
                                    <div className="prices-card__quantity">
                                        <p className="prices-card__text">Цена за 1 шт.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            {lightBoxSrc && lightBoxOpen && (
            <Lightbox
                mainSrc={lightBoxSrc}
                onClick={(e) => {console.log('stop') ;e.stopPropagation()}}
                onCloseRequest={
                    () => { setLightBoxOpen(false); if (!modalShow) unlockScroll()}
                }
            />
            )
            }

        </div>
    );
};

export default ItemBrowse;
