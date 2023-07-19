import { MouseEvent } from "react";

import classes from "./Pagination.module.css";
import ListItems from "../../List/ListItems";
import PaginationItem from "../../PaginationItem/PaginationItem";

interface PaginationProps {
  setCurrentPageNumber: (value: number) => void;
  currentPageNumber: number;
  totalPagesCount: number;
}

const Pagination = ({ setCurrentPageNumber, currentPageNumber, totalPagesCount }: PaginationProps) => {
  const pageNumbers = Array.from({ length: totalPagesCount }, (_, i) => i + 1);

  const handleChangeCurrentPage = (e: MouseEvent) => {
    if (e.target && "value" in e.target) {
      const numericValue = Number(e.target.value);
      setCurrentPageNumber(numericValue);
    }
  };

  return (
    <ListItems
      items={pageNumbers}
      listItemsClassName={classes.paginationContainer}
      onClick={handleChangeCurrentPage}
      renderItems={(pageNumber) => (
        <PaginationItem
          pageNumber={pageNumber}
          currentPageNumber={currentPageNumber}
        />
      )}
    />
  );
};

export default Pagination;
