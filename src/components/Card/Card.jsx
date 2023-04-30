import "./Card.scss";
import garageSale from "../../assets/img/garage-sale.jpg";
import { Link } from "react-router-dom";
const Card = ({ listing }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={garageSale} alt="sign" />
      </div>
      <div className="card-body">
        <p>{listing.store_name}</p>
        <span>{listing.description}</span>
        <div className="card-footer">
          <Link to={`/listing/${listing.id}`} state={listing}>
            View
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Card;
