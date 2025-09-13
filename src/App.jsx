import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
// futuramente você pode importar outras páginas:
import Segurança from "./pages/Segurança";
import Conforto from "./pages/Conforto";

function App() {
  return (
    <Router>
      <nav>

      </nav>
      {/* Rotas do site */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seguranca" element={<Segurança />} />
        <Route path="/conforto" element={<Conforto />} />
      </Routes>
    </Router>
  );
}

export default App;