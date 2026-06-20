import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <section>
        <p>101 cours Charlemagne CS 20033 69269 Lyon Cedex 02 France</p>
        <p>+33 (0)4 26 73 40 00</p>
      </section>
      <section>
        <Link to="/mentions-legales">Mentions Légales</Link>
        <Link to="/donnees-personnelles">Données personnelles</Link>
        <Link to="/accessibilite">Accessibilité</Link>
        <Link to="/cookies">Cookie</Link>
      </section>
    </footer>
  );
}
export default Footer;
