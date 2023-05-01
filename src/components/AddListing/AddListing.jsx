import "./AddListing.scss";
import FormListing from "../FormListing/FormListing";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useGlobalContext } from "../../hooks/context";

const AddListing = () => {
  const { setError } = useGlobalContext();

  const [form, setForm] = useState({
    store_name: "",
    contact: "",
    description: "",
    items: "",
  });

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
          There is 1 listing that is active under your account.
        </span>
      )}
    </div>
  );
};
export default AddListing;
