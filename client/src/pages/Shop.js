import React from 'react';


const Shop = () => {

    return (
        <div>
        <header class="header">
		<div class="header__bg">
			<img src="/img/header/bg-header.png" alt="Фон" />
		</div>
		<div class="container">
			<div class="header__top">
	<nav class="nav">
		<div class="nav__logo">
			<a class="logo" href="#!"><img class="logo__img" src="./img/header/logo.svg" alt="logo" /></a>
		</div>
		<div class="nav__conacts">
			<div class="img-phone"><img class="img-phone__icon"src="./img/header/phone.svg" alt="Телефон" /></div>
			<div class="phone">
				<a class="phone__number" href="tel:89128252323">+7 (912) 825-23-23</a>
				<a class="phone__number" href="tel:89127032010">+7 (912) 703-20-10</a>
			</div>
		</div>
		<ul class="nav__list">
			<li class="nav__item"><a class="nav__link" href="/index.html">Главня</a></li>
			<li class="nav__item"><a class="nav__link" href="/contacts.html">Контакты</a></li>
		</ul>
	</nav>
</div>
			<div class="header__content">
				<div class="home-content">
					<div class="home-content__block">
						<div class="home-content__column">
							<div class="home-content__subtitle">
								<h2 class="home-content__subtitle-text">Индивидуальный заказ <br/>в минимальные сроки</h2>
							</div>
							<div class="home-content__title">
								<h1>Производство ритуальных товаров</h1>
							</div>
							<h3 class="home-content__subtitle-title">В кировской области</h3>
						</div>
						<div class="home-content__button">
							<a class="button" href="/contacts.html"><h5 class="button-text">Схема проезда</h5><svg  class="button-right" width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path class="button-right" d="M1 21L11 11L1 1" stroke="#FAF8F1" stroke-linecap="round" stroke-linejoin="round" />
							</svg></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
	<main>
		<section class="menu-icon">
			<div class="container">
				<div class="menu-icon__title">
					<h2 class="title">
						Каталог товаров
					</h2>
				</div>
				<div class="menu-icon__content">
					<div class="menu-icon__column">
						<a class="menu-icon__link" href="./catalog.html">
							<div class="menu-icon__block">
								<img class="menu-icon__img"src="/img/menu-icon/coffin.svg" alt="Иконка гроб" />
							</div>
							<div class="menu-icon__subtittle"><h4>Гробы</h4></div>
						</a>
					</div>
					<div class="menu-icon__column">
						<a class="menu-icon__link" href="./catalog.html">
							<div class="menu-icon__block">
								<img class="menu-icon__img" src="/img/menu-icon/cross.svg" alt="Иконка Крест"/>
							</div>
							<div class="menu-icon__subtittle">
								<h4>Кресты</h4>
							</div>
						</a>
					</div>
					<div class="menu-icon__column">
						<a class="menu-icon__link" href="./catalog.html">
							<div class="menu-icon__block">
								<img class="menu-icon__img" src="/img/menu-icon/lining.svg" alt="Иконка Обивка"/>
							</div>
							<div class="menu-icon__subtittle">
								<h4>Обивки</h4>
							</div>
						</a>
					</div>
					<div class="menu-icon__column">
						<a class="menu-icon__link" href="./catalog.html">
							<div class="menu-icon__block">
								<img class="menu-icon__img" src="/img/menu-icon/lampada.svg" alt="Иконка лампадка"/>
							</div>
							<div class="menu-icon__subtittle">
								<h4>Ритуальные принадлежности</h4>
							</div>
						</a>
					</div>
				</div>
			</div>

		</section>
	</main>
	</div>
    );
};

export default Shop;
