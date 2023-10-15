import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';


const Contacts = () => {

    return (
        <div>
            <div class="menu-brown">
		<header class="header-catalog">
			<div class="container">
				<div class="header__top">
	<nav class="nav">
		<div class="nav__logo">
			<a class="logo" href="#!"><img class="logo__img" src="./img/header/logo.svg" alt="logo"/></a>
		</div>
		<div class="nav__conacts">
			<div class="img-phone"><img class="img-phone__icon"src="./img/header/phone.svg" alt="Телефон"/></div>
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
			</div>
		</header>
	</div>
	<main>
		<section class="contacts">
			<div class="container">
				<div class="contacts__content">
					<div class="contacts__location-map">
						<div class="contacts__title">
							<h2 class="title">Схема проезда</h2>
						</div>
						<div class="contacts__address">
							<p class="contacts__text">Адрес магазина: Кировская&nbsp;область, Солнечный&nbsp;проезд&nbsp;1&nbsp;корпус&nbsp;1.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="contacts__map">

			<YMaps>
                <Map defaultState={{ center: [58.582707, 49.595142], zoom: 16 }} width={1080} height={645} class="iframe">
                    <Placemark defaultGeometry={[58.582707, 49.595142]} />
                </Map>
            </YMaps>
			</div>
			<div class="container">
				<div class="contacts__block">
					<div class="contacts__email">
						<img class="contacts__img" src="/img/contacts/mail.svg" alt="email"/>
						<a class="contacts__email-address" href="mailto:kirovdenis@yandex.ru">kirovdenis@yandex.ru</a>
					</div>
					<div class="contacts__requisites requisites-contact">
						<div class="requisites-contact__title">
							Реквизиты организации:
						</div>
						<div class="requisites-contact__requisite">
							<p class="requisites-contact__text">
								Индивидуальный предприниматель Вохмянин Денис Владимирович
								<br/> ИНН 434529812152
								<br/>Р/с 40802810910180000851 в Филиал «Центральный» Банка ВТБ (ПАО) в г. Москве
								<br/>К/с 30101810145250000411
								<br/>БИК 044525411
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
        </div>
    );
};

export default Contacts;
