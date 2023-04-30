import "./Button.scss";

const Button = ({
  bg = "#00bdd6ff",
  label,
  width = "168px",
  action = "submit",
  onDelete,
}) => {
  return (
    <div className="settings-btn__wrapper">
      {action !== "submit" ? (
        <button
          className="settings-btn"
          style={{ background: bg, width: width }}
          onClick={onDelete}
          type="button"
        >
          {label}
        </button>
      ) : (
        <button
          className="settings-btn"
          type="submit"
          style={{ background: bg, width: width }}
        >
          {label}
        </button>
      )}
    </div>
  );
};
export default Button;
