import React from 'react';

function PageNumbers({ currentPage, totalPages, onPageClick }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="page-numbers">
      {pageNumbers.map((pageNumber) => (
        <li key={pageNumber}>
          <button
            className={currentPage === pageNumber ? 'current-page' : ''}
            onClick={() => onPageClick(pageNumber)}
            disabled={currentPage === pageNumber}
          >
            {pageNumber}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default PageNumbers;
