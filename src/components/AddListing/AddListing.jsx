import "./AddListing.scss";
import FormListing from "../FormListing/FormListing";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";

const AddListing = () => {
  const [form, setForm] = useState({
    store_name: "",
    contact: "",
    description: "",
    items: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const userListing = useFetch();

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  return (
    <div className="add-listing">
      <h3>Add listing</h3>
      {!userListing ? (
        <FormListing
          store_name={form.store_name}
          contact={form.contact}
          description={form.description}
          items={form.items}
          onChange={handleOnChange}
          error={error}
          success={success}
          setError={setError}
          setSuccess={setSuccess}
        />
      ) : (
        <span
          style={{
            color: "green",
            fontWeight: "bold",
            display: "flex",
            marginTop: "15px",
          }}
        >
          You have 1 active listing
        </span>
      )}
    </div>
  );
};
export default AddListing;
