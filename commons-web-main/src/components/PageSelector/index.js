import React from 'react';
import ReactPaginate from 'react-paginate';
import './App.css';


/* type Props = {
  total: number,
  limit: number,
  pageCount: number,
  currentPage: number,
  onPageChange: (page, e) => void,
}; */

{/* <Pagination
total={props.total}
limit={props.limit}
pageCount={props.pageCount}
currentPage={props.currentPage}
> */}

const PageSelector = (props) => {
  pageCount = props.pageCount

  return (
    <div>
      <ReactPaginate
        previousLabel='&#8249;'
        breakLabel="&#8230;"
        nextLabel="&#8250;"
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={7}
        containerClassName={'pageNumberContainer'}
        pageClassName={'pageNumberClass'}
        // pageLinkClassName={"pageNumberLink"}
        // previousClassName={"pageNumberItem"}
        // previousLinkClassName={"pageNumberLink"}
        // nextClassName={"pageNumberItem"}
        // nextLinkClassName={"pageNumberLink"}
        // breakClassName={"pageNumberItem"}
        // breakLinkClassName={"pageNumberLink"}
        activeClassName={'pageNumberClassActive'}
      />
    </div>

  );
};

export default PageSelector;
