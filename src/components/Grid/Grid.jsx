import "./Grid.scss";
import Card from "../Card/Card";

const Grid = ({ listings }) => {
  return (
    <div className="grid">
      {listings?.map((listing) => (
        <Card key={listing.id} listing={listing} />
      ))}
    </div>
  );
};
export default Grid;
