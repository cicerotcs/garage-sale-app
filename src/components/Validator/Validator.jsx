import { useGlobalContext } from "../../hooks/context";

const Validator = () => {
  const { error, success, setSuccess } = useGlobalContext();

  if (success) {
    setTimeout(() => {
      setSuccess("");
    }, 3000);
  }

  return (
    <>
      <small style={{ color: "red", display: "flex", marginTop: "10px" }}>
        {error}
      </small>
      <small
        style={{ color: "green", display: "flex", marginTop: "10px" }}
        className="mb-20"
      >
        {success}
      </small>
    </>
  );
};
export default Validator;
