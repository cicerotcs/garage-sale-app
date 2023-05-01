import FormListing from "../FormListing/FormListing";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../hooks/context";

const MyListings = () => {
  const userListing = useFetch();
  const { setError } = useGlobalContext();

  const [form, setForm] = useState({
    store_name: "",
    contact: "",
    description: "",
    items: "",
    listingId: "",
  });

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
          It appears that you do not currently have any active listings.
        </span>
      )}
    </div>
  );
};
export default MyListings;
