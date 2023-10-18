import { $host } from "./index";
import jwt_decode from "jwt-decode";

export const authorization = async (login, password) => {
    const {data} = await $host.post('api/user/login', {login, password});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}

export const check = async () => {
    const {data} = await $host.get('api/user/');
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}
