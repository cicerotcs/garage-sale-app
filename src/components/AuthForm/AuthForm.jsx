import { Link } from "react-router-dom";
import { useState } from "react";
import { signup, signin } from "../../utils/auth-api";
import { useGlobalContext } from "../../hooks/context";
import { useNavigate } from "react-router-dom";
import authBg from "../../assets/img/img-2627.png";
import Button from "../../components/Button/Button";
import Validator from "../Validator/Validator";

const AuthForm = ({ label, action, buttonLabel }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const {
    login,
    error,
    success,
    setError,
    setSuccess,
    isLoading,
    setIsLoading,
  } = useGlobalContext();

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = form;

    if (!form.email || !form.password) {
      setError("Please complete all required fields");
      return;
    }

    setIsLoading(true);

    let res;

    if (action === "signup") {
      if (!form.name) {
        setError("Please complete all required fields");
        setIsLoading(false);
        return;
      }
      res = await signup(name, email, password);
      if (res.status === 200) {
        navigate("/signin");
      }
    } else if (action === "signin") {
      res = await signin(email, password);
      if (res.status === 200) {
        login(res.data.token);
        navigate("/settings");
      }
    }

    setIsLoading(false);

    if (res.status === 200) {
      setSuccess(res.data.msg);
    } else {
      setError(res.response.data.msg);
    }
  };

  return (
    <div className="auth">
      <div className="auth-form">
        <div style={{ textAlign: "center" }}>
          <h2>{label}</h2>
        </div>

        <form onSubmit={handleSubmit}>
          {action === "signup" && (
            <div className="mb-20">
              <label htmlFor="name">Full name</label>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleOnChange}
              />
            </div>
          )}
          <div className="mb-20">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              placeholder="example.email@gmail.com"
              value={form.email}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-20">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter at least 8+ characters"
              value={form.password}
              onChange={handleOnChange}
            />
          </div>

          {error || success ? <Validator /> : ""}

          <div className="auth-forgot">
            <Link>Forgot password?</Link>
          </div>
          <Button label={buttonLabel} width="100%" />
        </form>
      </div>

      <div className="auth-bg">
        <img src={authBg} alt="" />
      </div>
    </div>
  );
};
export default AuthForm;
