import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./Auth/SignUp";
import SignIn from "./Auth/SignIn";
import Choose from "./pages/Choose";
import Layout from "./layout/Layout";
import Clothes from "./pages/Clothes";
import Servises from "./pages/Servises";
import ClothesId from "./pages/ClothesId";
import Notfound from "./components/Notfound";

function App() {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/clothes"
          element={
            <Layout>
              <Clothes />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/servises"
          element={
            <Layout>
              <Servises />
            </Layout>
          }
        />
        <Route
          path="/chooseclothes"
          element={
            <Layout>
              <Choose />
            </Layout>
          }
        />
        <Route
          path="/clothesid"
          element={
            <Layout>
              <ClothesId />
            </Layout>
          }
        />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route
          path="*"
          element={
              <Notfound />
          }
        />
      </Routes>
    </main>
  );
}

export default App;
