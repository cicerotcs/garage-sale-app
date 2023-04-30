import "./Card.scss";
import garageSale from "../../assets/img/garage-sale.jpg";
import { Link } from "react-router-dom";
const Card = ({ sale }) => {
  const { name, description, id } = sale;
  return (
    <div className="card">
      <div className="card-header">
        <img src={garageSale} alt="sign" />
      </div>
      <div className="card-body">
        <p>{name}</p>
        <span>{description}</span>
        <div className="card-footer">
          <Link to={`/listing/${id}`} state={sale}>
            View
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Card;
