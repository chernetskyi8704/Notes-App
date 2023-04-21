import React from "react";
import classes from "./Pagination.module.css";

const Pagination = ({ setCurrentPageNumber, currentPageNumber, totalPagesCount }) => {
  const pagesArray = Array.from({ length: totalPagesCount }, (_, i) => i + 1);

  const handleChangeCurrentPage = e => {
    if (e.target.value) {
        setCurrentPageNumber(e.target.value);
    }
  };

  return (
    <ul
      className={classes.paginationContainer}
      onClick={handleChangeCurrentPage}
    >
      {pagesArray.map(pageNumber => (
        <li
          className={`${classes.page} ${
            currentPageNumber === pageNumber ? classes.page__current : ""
          }`}
          value={pageNumber}
          key={pageNumber}
        >
          {[pageNumber]}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
