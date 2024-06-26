import './App.css';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components'




function App() {
  const handlePageClick = (data) => {
    console.log(data)
  }


  return (
    <div>
      <ReactPaginate
        previousLabel='&#8249;'
        breakLabel="&#8230;"
        nextLabel="&#8250;"
        pageCount={30}
        marginPagesDisplayed={1}
        pageRangeDisplayed={7}
        onPageChange={handlePageClick}
        containerClassName="pageNumberContainer"
        pageClassName='pageNumberClass'
        previousClassName={"pageNumberItem"}
        previousLinkClassName={"pageNumberLink"}
        nextClassName={"pageNumberItem"}
        nextLinkClassName={"pageNumberLink"}
        breakClassName={"pageNumberItem"}
        breakLinkClassName={"pageNumberLink"}
        activeClassName="pageNumberClassActive"
      />
    </div>
  );
}

export default App;
