import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import NavBar from '../components/NavBar';


const Contacts = () => {


	return (
		<div>
			<div className="menu-brown">
				<header className="header-catalog">
					<div className="container">
						<NavBar/>
					</div>
				</header>
			</div>
			<main>
				<section className="contacts">
					<div className="container">
						<div className="contacts__content">
							<div className="contacts__location-map">
								<div className="contacts__title">
									<h2 className="title">Схема проезда</h2>
								</div>
								<div className="contacts__address">
									<p className="contacts__text">Адрес магазина: Кировская&nbsp;область, Солнечный&nbsp;проезд&nbsp;1&nbsp;корпус&nbsp;1.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="contacts__map">

						<YMaps query={{ apikey: "2b64e4d1-4444-4b48-ac6f-88aeaf08d5b6"}}>
							<Map defaultState={{ center: [58.582707, 49.595142], zoom: 16 }} width='100%' height='600px' className="iframe">
								<Placemark geometry={[58.582707, 49.595142]}  options={ {
									iconLayout: 'default#image',
									iconImageHref: 'img/contacts/map.svg',
									iconImageSize: [40, 40],
									iconImageOffset: [-5, -38]
        }} />
							</Map>
						</YMaps>
					</div>
					<div className="container">
						<div className="contacts__block">
							<div className="contacts__email">
								<img className="contacts__img" src="/img/contacts/mail.svg" alt="email" />
								<a className="contacts__email-address" href="mailto:kirovdenis@yandex.ru">kirovdenis@yandex.ru</a>
							</div>
							<div className="contacts__requisites requisites-contact">
								<div className="requisites-contact__title">
									Реквизиты организации:
						</div>
								<div className="requisites-contact__requisite">
									<p className="requisites-contact__text">
										Индивидуальный предприниматель Вохмянин Денис Владимирович
								<br /> ИНН 434529812152
								<br />Р/с 40802810910180000851 в Филиал «Центральный» Банка ВТБ (ПАО) в г. Москве
								<br />К/с 30101810145250000411
								<br />БИК 044525411
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
