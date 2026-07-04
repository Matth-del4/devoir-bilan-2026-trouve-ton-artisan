import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      .get("http://localhost:3000/api/categories", {
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
        className="menu-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        Menu
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
          <h1>Trouve ton artisan</h1>
        </Link>
      </nav>

      {isMenuOpen && (
        <nav>
          {categories.map((category) => (
            <Link key={category.id} to={`/categorie/${category.id}`}>
              {category.domaine}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
export default Header;
