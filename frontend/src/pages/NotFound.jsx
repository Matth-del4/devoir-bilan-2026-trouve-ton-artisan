import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/main.scss";

function NotFound() {
  return (
    <div>
      <Header />
      <main>
        <h1>Page non trouvée</h1>
        <img src="/favicon-32.png" alt="Page non trouvée" />
        <p>La page que vous recherchez n'existe pas.</p>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;
