import { Link } from "react-router-dom";
import "../styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <p>101 cours Charlemagne</p>
            <p>CS 20033</p>
            <p>69269 Lyon Cedex 02</p>
            <p>France</p>
            <p>+33 (0)4 26 73 40 00</p>
          </div>
          <div className="col-4 text-center">
            <p>Trouve ton artisan !</p>
          </div>
          <div className="col-4 text-end">
            <Link to="/mentions-legales">Mentions Légales</Link>
            <Link to="/donnees-personnelles">Données personnelles</Link>
            <Link to="/accessibilite">Accessibilité</Link>
            <Link to="/cookies">Cookie</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
