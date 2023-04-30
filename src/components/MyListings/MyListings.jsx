import FormListing from "../FormListing/FormListing";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";

const MyListings = () => {
  const userListing = useFetch();

  const [form, setForm] = useState({
    store_name: "",
    contact: "",
    description: "",
    items: "",
    listingId: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (userListing) {
      setForm({
        store_name: userListing.store_name,
        contact: userListing.contact,
        description: userListing.description,
        items: userListing.items,
        listingId: userListing.id,
      });
    }
  }, [userListing]);

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  return (
    <div className="my-listings">
      <h3>My listings</h3>
      {userListing ? (
        <FormListing
          store_name={form.store_name}
          contact={form.contact}
          description={form.description}
          items={form.items}
          listingId={form.listingId}
          onChange={handleOnChange}
          error={error}
          success={success}
          setError={setError}
          setSuccess={setSuccess}
        />
      ) : (
        <span
          style={{
            color: "red",
            fontWeight: "bold",
            display: "flex",
            marginTop: "15px",
          }}
        >
          You don't have any active listing
        </span>
      )}
    </div>
  );
};
export default MyListings;
