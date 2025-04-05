
import "../styles/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container-custom footer-container">
        <div>
          <p className="footer-copyright">&copy; {currentYear} KOA Detect. All rights reserved.</p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p className="footer-copyright">Healthcare AI Solutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
