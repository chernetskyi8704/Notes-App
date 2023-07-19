import classes from "./PaginationItem.module.css";

interface PaginationItemProps {
  pageNumber: number;
  currentPageNumber: number;
}

const PaginationItem = ({ pageNumber, currentPageNumber }: PaginationItemProps) => {
  return (
    <li
      className={`${classes.page} ${
        currentPageNumber === pageNumber ? classes.page__current : ""
      }`}
      value={pageNumber}
      key={pageNumber}
    >
      {pageNumber}
    </li>
  );
};

export default PaginationItem;
