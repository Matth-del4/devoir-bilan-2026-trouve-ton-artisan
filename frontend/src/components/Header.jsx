import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Trouve ton artisan</h1>
      <nav>
        <Link to="/">logo</Link>
        <Link to="/about">À propos</Link>
      </nav>
    </header>
  );
}
export default Header;
