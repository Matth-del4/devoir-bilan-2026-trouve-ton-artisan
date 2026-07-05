import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Header.scss";

function Header() {
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?search=${searchTerm}`);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/categories`, {
        headers: {
          "x-api-key": import.meta.env.VITE_API_KEY,
        },
      })
      .then((response) => {
        setCategories(response.data);
      });
  }, []);

  return (
    <header>
      <button
        className="menu-button d-md-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      <input
        type="text"
        placeholder="Rechercher..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch(e);
          }
        }}
      />

      <nav>
        <Link to="/">
          <img src="/Logo.png" alt="Trouve ton artisan" />
        </Link>
      </nav>

      {/* Menu déroulant - visible uniquement sur mobile quand burger cliqué */}
      {isMenuOpen && (
        <nav className="d-md-none">
          {categories.map((category) => (
            <Link key={category.id} to={`/categorie/${category.id}`}>
              {category.domaine}
            </Link>
          ))}
        </nav>
      )}

      {/* Menu desktop - visible uniquement sur grand écran */}
      <nav className="d-none d-md-flex gap-3">
        {categories.map((category) => (
          <Link key={category.id} to={`/categorie/${category.id}`}>
            {category.domaine}
          </Link>
        ))}
      </nav>
    </header>
  );
}
export default Header;
