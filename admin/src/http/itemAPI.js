import { $host } from "./index";

export const categoryCreateOne = async (form) => {
    const {data} = await $host.post('api/category/', {...form});
    return data;
}

export const readAllCategory = async () => {
    const {data} = await $host.get('api/category/');
    return data;
}

export const categoryRemove = async (id) => {
    const {data} = await $host.delete(`api/category/${id}`);
    return data;
}

export const categoryUpdate = async (form, id) => {
    const {data} = await $host.patch(`api/category/${id}`, {...form});
    return data;
}
