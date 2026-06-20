import Header from "../components/Header";
import Footer from "../components/Footer";

function NotFound() {
  return (
    <div>
      <Header />
      <main>
        <h1>Page non trouvée</h1>
        <img src="/images/404.png" alt="Page non trouvée" />
        <p>La page que vous recherchez n'existe pas.</p>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;
