import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout({ children }) {
  return (
    <section>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </section>
  );
}

export default Layout;
