import Pagination from "@mui/material/Pagination";
import "./PaginationComponent.scss";

const PaginationComponent = ({ pageCount, currentPage, onChange }) => {
  return (
    <div className="pagination">
      <Pagination count={pageCount} page={currentPage} onChange={onChange} />
    </div>
  );
};

export default PaginationComponent;
