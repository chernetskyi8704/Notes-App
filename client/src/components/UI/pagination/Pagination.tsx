import { MouseEvent } from "react";
import classes from "./Pagination.module.css";

interface PaginationProps {
  setCurrentPageNumber: (value: number) => void;
  currentPageNumber: number;
  totalPagesCount: number;
}

const Pagination = ({
  setCurrentPageNumber,
  currentPageNumber,
  totalPagesCount,
}: PaginationProps) => {
  const pageNumbers = Array.from({ length: totalPagesCount }, (_, i) => i + 1);
  const pages = pageNumbers.map(pageNumber => (
    <li
      className={`${classes.page} ${
        currentPageNumber === pageNumber ? classes.page__current : ""
      }`}
      value={pageNumber}
      key={pageNumber}
    >
      {pageNumber}
    </li>
  ));

  const handleChangeCurrentPage = (e: MouseEvent) => {
    if (e.target && "value" in e.target) {
      const numericValue = Number(e.target.value);
      setCurrentPageNumber(numericValue);
    }
  };

  return (
    <ul
      className={classes.paginationContainer}
      onClick={handleChangeCurrentPage}
    >
      {pages}
    </ul>
  );
};

export default Pagination;
