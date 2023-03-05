import "./_footer.scss";
import vgl from "../../../assets/img/vgl.png";

function Footer() {
  return (
    <footer className="footer animate__animated animate__fadeIn animate__slower">
      <div className="footer-wrapper">
        <a href="https://vgl.com.ar" target="_blank" rel="noreferrer">
          <img src={vgl} className="footer-logo" alt="VGL Logo" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
