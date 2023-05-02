import "./Grid.scss";
import Card from "../Card/Card";
import PaginationComponent from "../PaginationComponent/PaginationComponent";
import { useState } from "react";

const Grid = ({ listings }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const listingsToRender = listings?.slice(startIndex, endIndex);

  const handlePageChange = (e, newPage) => {
    setCurrentPage(newPage);
  };

  const pageCount = Math.ceil(listings?.length / itemsPerPage);

  return (
    <>
      <div className="grid">
        {listingsToRender?.map((listing) => (
          <Card key={listing.id} listing={listing} />
        ))}
      </div>
      <PaginationComponent
        pageCount={pageCount}
        currentPage={currentPage}
        onChange={handlePageChange}
      />
    </>
  );
};
export default Grid;
