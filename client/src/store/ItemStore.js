import { makeAutoObservable } from "mobx";

export default class ItemStore {
	constructor() {
		this._items = [];
		this._categories = [];
		this._selectedCategory = {}
		this._selectedItem = {}
		this._page = 1
		this._totalCount = 0
		this._limit = 12
		makeAutoObservable(this);
	}

	setItems(items) {
		this._totalCount = items.count;
		this._items = items.rows;
	}

	setCategories(categories) {
		this._categories = categories;
	}

	setSelectedCategory(category) {
		this._selectedCategory = category;
	}

	setPage(page) {
		this._page = page;
	}

	setTotalCount(count) {
		this._totalCount = count;
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

	get page() {
		return this._page;
	}

	get totalCount() {
		return this._totalCount;
	}

	get limit() {
		return this._limit;
	}

}
