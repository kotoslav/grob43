import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
import AppRouter from './components/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { observer } from 'mobx-react-lite';
import { Context } from './index';
import { check } from './http/userAPI';
import { readAllCategory, itemReadAllByCategory } from './http/itemAPI';

const App = observer (() => {
    const {user, item} = useContext(Context);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
        check()
        .then(data => {
            user.setIsAuth(true)
        })
        .catch((e) => {
            user.setIsAuth(false)
        }
        )
        .finally(() => setLoading(false));

        readAllCategory().then(
            data => {
                item.setCategories(data);
                item.setSelectedCategory({...data[0]});
            }
        );
        itemReadAllByCategory(item.selectedCategory.id).then(
            data => item.setItems(data)
        );


    }, [])

    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
});

export default App;
