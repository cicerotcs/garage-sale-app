import "./Grid.scss";
import Card from "../Card/Card";
import { sales } from "../../data.js";

const Grid = ({ listings }) => {
  console.log(listings);
  return (
    <div className="grid">
      {listings.map((listing) => (
        <Card key={listing.id} listing={listing} />
      ))}
    </div>
  );
};
export default Grid;
