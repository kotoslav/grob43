import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = true
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool;
        if (bool === false) {
            localStorage.setItem('token', "")
        }
    }

    get isAuth() {
        return this._isAuth
    }
}
