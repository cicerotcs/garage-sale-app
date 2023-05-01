import "./Listing.scss";
import { useLocation } from "react-router-dom";
import Map from "../../components/Map/Map";
import { useState } from "react";

const Listing = () => {
  const location = useLocation();
  const { state } = location;

  const [text, setText] = useState("Send a message to the seller");

  const {
    latitude,
    longitude,
    store_name,
    description,
    contact,
    items,
    location: address,
  } = state;

  const handleOnChange = (e) => {
    setText(() => e.target.value);
  };

  return (
    <div className="listing">
      <Map height="300px" lat={latitude} lng={longitude} />
      <div className="listing-info">
        <section>
          <h2>{store_name}</h2>
          <h4>{address}</h4>
          <p>ph: {contact}</p>
          <div className="listing-items">
            <h4>{items}</h4>
          </div>
        </section>
        <div className="message">
          <textarea value={text} onChange={handleOnChange}></textarea>
          <button>Send message</button>
        </div>
      </div>
    </div>
  );
};
export default Listing;
