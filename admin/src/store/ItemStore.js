import { makeAutoObservable } from "mobx";

export default class ItemStore {
	constructor() {
		this._items = [
			{
				"id": 4,
				"name": "Крест11",
				"description": "",
				"article": "321Ж",
				"price": 320,
				"categoryId": 1,
				"gallery": ["/upload/e46375b6-8723-476e-a73e-38c4a07761f5.jpg", "/upload/97834135-e7dd-4638-81ea-024c6a826daf.jpg"],
				"createdAt": "2023-10-08T10:35:05.767Z",
				"updatedAt": "2023-10-08T10:35:05.767Z"
			},
			{
				"id": 5,
				"name": "Крест11",
				"description": "",
				"article": "321Ж",
				"price": 320,
				"categoryId": 3,
				"gallery": ["/upload/51c02642-3854-4c4e-9cc1-2d4be60ee6d0.jpg", "/upload/4fea15c5-6e78-4778-a381-61910a69fec5.jpg"],
				"createdAt": "2023-10-08T10:35:09.839Z",
				"updatedAt": "2023-10-08T10:35:09.839Z"
			},
			{
				"id": 6,
				"name": "Крест очень большой",
				"description": "",
				"article": "321Ж1",
				"price": 320,
				"categoryId": 3,
				"gallery": ["/upload/2aaa752d-ec73-4c5d-9b1a-19e2060e8516.jpg", "/upload/6ed84a00-e5e9-4a90-aff5-9bcd26984c2c.png"],
				"createdAt": "2023-10-08T10:34:18.922Z",
				"updatedAt": "2023-10-08T10:42:21.651Z"
			},
			{
				"id": 7,
				"name": "Крест очень большой",
				"description": "",
				"article": "321Ж1",
				"price": 320,
				"categoryId": 3,
				"gallery": ["/upload/72307c10-e640-4e71-846d-4a304af9e293.jpg", "/upload/4760acab-0b52-4e6e-8031-cec4afcb4de0.jpg"],
				"createdAt": "2023-10-08T10:34:18.922Z",
				"updatedAt": "2023-10-08T10:42:21.651Z"
			},
			{
				"id": 8,
				"name": "Крест очень большой",
				"description": "",
				"article": "321Ж1",
				"price": 320,
				"categoryId": 3,
				"gallery": ["/upload/4760acab-0b52-4e6e-8031-cec4afcb4de0.jpg", "/upload/72307c10-e640-4e71-846d-4a304af9e293.jpg"],
				"createdAt": "2023-10-08T10:34:18.922Z",
				"updatedAt": "2023-10-08T10:42:21.651Z"
			}

		];
		this._categories = [
			{
				"id": 1,
				"title": "Кресты",
				"description": "",
				"imgPath": "/upload/4fea15c5-6e78-4778-a381-61910a69fec5.jpg",
				"createdAt": "2023-10-08T09:41:13.869Z",
				"updatedAt": "2023-10-08T09:41:13.869Z"
			},
			{
				"id": 3,
				"title": "Канделябры",
				"description": "",
				"imgPath": "/upload/4fea15c5-6e78-4778-a381-61910a69fec5.jpg",
				"createdAt": "2023-10-08T09:41:39.478Z",
				"updatedAt": "2023-10-08T09:41:39.478Z"
			}
		];
		this._selectedCategory = {}
		this._selectedItem = {}
		makeAutoObservable(this);
	}

	setItems(items) {
		this._items = items;
	}

	setCategories(categories) {
		this._categories = categories;
	}

	setSelectedCategory(category) {
		this._selectedCategory = category;
	}

	get items() {
		return this._items;
	}

	get categories() {
		return this._categories;
	}

	get selectedCategory() {
		return this._selectedCategory;
	}

}
