import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import ReactPaginate from 'react-paginate';


const PaginationPages = observer(({ }) => {
    const { item } = useContext(Context)
    const pageCount = Math.ceil(item.totalCount / item.limit);
    const pages = [];

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        activeClassName={"active"}
        onPageChange={ (e) => { item.setPage(e.selected + 1)}}
        pageRangeDisplayed={3}
        pageCount={Math.ceil(item.totalCount / item.limit)}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className="mt-5 pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
      />
    );
});

export default PaginationPages;
