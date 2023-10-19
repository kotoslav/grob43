import { makeAutoObservable } from "mobx";

export default class ItemStore {
	constructor() {
		this._items = [];
		this._categories = [];
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
