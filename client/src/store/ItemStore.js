import {makeAutoObservable} from "mobx";

export default class ItemStore {
    constructor() {
        this._items =[
	{
		"id": 4,
		"name": "Крест11",
		"description": "",
		"article": "321Ж",
		"price": 320,
		"categoryId": 3,
		"mainImgPath": "img/krest1.png",
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
		"mainImgPath": "img/krest1.png",
		"createdAt": "2023-10-08T10:35:09.839Z",
		"updatedAt": "2023-10-08T10:35:09.839Z"
	},
	{
		"id": 3,
		"name": "Крест очень большой",
		"description": "",
		"article": "321Ж1",
		"price": 320,
		"categoryId": 3,
		"mainImgPath": "img/krest1.png",
		"createdAt": "2023-10-08T10:34:18.922Z",
		"updatedAt": "2023-10-08T10:42:21.651Z"
	}
];
        this._categories = [
	{
		"id": 1,
		"title": "Кресты",
		"description": "",
		"imgPath": "",
		"createdAt": "2023-10-08T09:41:13.869Z",
		"updatedAt": "2023-10-08T09:41:13.869Z"
	},
	{
		"id": 3,
		"title": "Кресты",
		"description": "",
		"imgPath": "",
		"createdAt": "2023-10-08T09:41:39.478Z",
		"updatedAt": "2023-10-08T09:41:39.478Z"
	}
];
        makeAutoObservable(this);
    }

    setItems(items) {
        this._items = items;
    }

    setCategories(categories) {
        this._categories = categories;
    }

    get items() {
        return this._items
    }

    get categories() {
        return this._categories
    }

}