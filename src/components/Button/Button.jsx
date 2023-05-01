import "./Button.scss";
import { useGlobalContext } from "../../hooks/context";
const Button = ({
  bg = "#00bdd6ff",
  label,
  width = "168px",
  action = "submit",
  onDelete,
}) => {
  const { isLoading } = useGlobalContext();
  console.log(isLoading);
  return (
    <div className="settings-btn__wrapper">
      {action !== "submit" ? (
        <button
          className="settings-btn"
          style={{ background: bg, width: width }}
          onClick={onDelete}
          type="button"
        >
          {isLoading ? "Loading..." : label}
        </button>
      ) : (
        <button
          className="settings-btn"
          type="submit"
          style={{ background: bg, width: width }}
        >
          {isLoading ? "Loading..." : label}
        </button>
      )}
    </div>
  );
};
export default Button;
