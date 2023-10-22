import { $host } from "./index";

export const readAllCategory = async () => {
    const { data } = await $host.get('api/category/');
    return data;
}

export const itemReadAllByCategory = async (categoryId, page=1) => {
    const { data } = await $host.get('api/item/category/', {
        params: {
            categoryId: categoryId,
            page
        }
    });
    return data;
}
