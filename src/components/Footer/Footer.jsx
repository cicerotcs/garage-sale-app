import "./Footer.scss";
import logo from "../../assets/img/logo-black.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="footer-product">
        <h3>Product</h3>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className="footer-resources">
        <h3>Resources</h3>
        <ul>
          <li>Blog</li>
          <li>User guides</li>
        </ul>
      </div>
      <div className="footer-company">
        <h3>Company</h3>
        <ul>
          <li>About</li>
          <li>Join us</li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
