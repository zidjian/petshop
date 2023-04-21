import "./assets/css/base/base.css";
import "./assets/css/componentes/card.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Pagina404 from './pages/Pagina404';
import Header from "./components/Header";
import Publicacion from "./pages/Publicacion";
import Categoria from "./pages/Categoria";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="sobre" element={<Sobre />} />
                <Route path="publicacion/:id" element={<Publicacion />} />
                <Route path="categoria/:id/*" element={<Categoria />} />
                <Route path="*" element={<Pagina404 />} />
            </Routes>
        </Router>
    );
}

export default App;


