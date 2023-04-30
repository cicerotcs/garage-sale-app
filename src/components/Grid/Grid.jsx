import "./Grid.scss";
import Card from "../Card/Card";
import { sales } from "../../data.js";

const Grid = () => {
  return (
    <div className="grid">
      {sales.map((sale) => (
        <Card key={sale.id} sale={sale} />
      ))}
    </div>
  );
};
export default Grid;
