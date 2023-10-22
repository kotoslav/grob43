import React, { useContext, useEffect } from 'react';
import CatalogCardsOnMainPage from '../components/CatalogCardsOnMainPage';
import { readAllCategory } from '../http/itemAPI';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import NavBar from '../components/NavBar';


const Shop = observer(() => {
	const { item } = useContext(Context);

	useEffect(() => {
		readAllCategory().then(
			data => {
				item.setCategories(data);
			}
		);
	}, [])


	return (
		<div>
			<header className="header">
				<div className="header__bg">
					<img src="/img/header/bg-header.jpg" alt="Фон" />
				</div>
				<div className="container">
					<NavBar/>
					<div className="header__content">
						<div className="home-content">
							<div className="home-content__block">
								<div className="home-content__column">
									<div className="home-content__subtitle">
										<h2 className="home-content__subtitle-text">Индивидуальный заказ <br />в минимальные сроки</h2>
									</div>
									<div className="home-content__title">
										<h1>Производство ритуальных товаров</h1>
									</div>
									<h3 className="home-content__subtitle-title">В кировской области</h3>
								</div>
								<div className="home-content__button">
									<a className="button" href="/contacts.html"><h5 className="button-text">Схема проезда</h5><svg className="button-right" width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path className="button-right" d="M1 21L11 11L1 1" stroke="#FAF8F1" strokeLinecap="round" strokeLinejoin="round" />
									</svg></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<main>
				<section className="menu-icon">
					<div className="container">
						<div className="menu-icon__title">
							<h2 className="title">
								Каталог товаров
					</h2>
						</div>


						<CatalogCardsOnMainPage />

					</div>

				</section>
			</main>
		</div>
	);
});

export default Shop;
