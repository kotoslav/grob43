import {SHOP_ROUTE, CONTACTS_ROUTE, CATALOG_ROUTE} from "./utils/consts";
import Shop from "./pages/Shop";
import Contacts from "./pages/Contacts"
import Catalog from "./pages/Catalog";


export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: CATALOG_ROUTE,
        Component: Catalog
    },
]
