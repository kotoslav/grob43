import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { Pagination } from 'react-bootstrap';


const PaginationPages = observer(({}) => {
    const {item} = useContext(Context)
    const pageCount = Math.ceil(item.totalCount / item.limit);
    const pages = [];

    for (let i = 0; i < pageCount; i++){
        pages.push( i + 1 )
    }

    return (
        <Pagination className="mt-5">
            {pages.map(page =>

                <Pagination.Item
                key={page}
                onClick={ () => item.setPage(page)}
                active={item.page === page}
                > {page} </Pagination.Item>
            )}
        </Pagination>
    );
});

export default PaginationPages;
