import { useGlobalContext } from "../../hooks/context";
import Button from "../Button/Button";
import Search from "../Search/Search";
import useLocation from "../../hooks/useLocation";
import {
  addListing,
  editListing,
  deleteListing,
} from "../../utils/listing-api";

import Validator from "../Validator/Validator";

const FormListing = ({
  store_name,
  contact,
  description,
  items,
  listingId,
  onChange,
}) => {
  const {
    activeLink,
    location,
    setLocation,
    setActiveLink,
    error,
    success,
    setError,
    setSuccess,
    setIsLoading,
  } = useGlobalContext();

  const coords = useLocation();

  const getResponse = (res) => {
    if (res.status === 200) {
      setSuccess(res.data.msg);
    } else {
      setError(res.response.data.msg);
    }
    setIsLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!store_name || !description || !items || !contact || !location) {
      setError("Please complete all required fields");
      return;
    }

    const { lat, lng } = coords;
    let res;

    setIsLoading(true);

    if (activeLink === "add-listing") {
      res = await addListing(
        store_name,
        contact,
        description,
        location,
        items,
        lat,
        lng
      );
      setActiveLink("my-listings");
    } else if (activeLink === "my-listings") {
      res = await editListing(
        store_name,
        contact,
        description,
        location,
        items,
        listingId,
        lat,
        lng
      );
    }

    getResponse(res);
    setLocation("");
  };

  const handleDelete = async () => {
    setIsLoading(true);
    let res = await deleteListing(listingId);
    getResponse(res);
    setActiveLink("general");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-name">
          <div style={{ flex: 1 }}>
            <label htmlFor="store_name">Name</label>
            <input
              id="store_name"
              name="store_name"
              placeholder="Name your sale"
              value={store_name}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="mb-20">
          <label htmlFor="contact">Contact</label>
          <input
            id="contact"
            name="contact"
            placeholder="Enter your contact information here"
            value={contact}
            onChange={onChange}
          />
        </div>
        <div className="mb-20">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            name="description"
            placeholder="Provide a short description"
            value={description}
            onChange={onChange}
          />
        </div>
        <Search />
        <div className="mb-20">
          <label htmlFor="items">Items</label>
          <textarea
            style={{ height: "95px", resize: "none" }}
            placeholder="List your items for sale"
            name="items"
            value={items}
            onChange={onChange}
          ></textarea>
          {error || success ? <Validator /> : ""}
        </div>
        {activeLink === "add-listing" && <Button label="Submit" />}
        {activeLink === "my-listings" && (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button label="Edit" />
            <Button
              label="Delete"
              bg="#E05858FF"
              action="delete"
              onDelete={handleDelete}
            />
          </div>
        )}
      </form>
    </>
  );
};
export default FormListing;
