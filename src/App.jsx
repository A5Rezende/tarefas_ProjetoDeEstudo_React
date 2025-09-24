import TarefasSimples from "./pages/tarefasSimples";
import TarefasComStatus from "./pages/tarefasComStatus";
import ListaSupermercado from "./pages/ListaSupermercado";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

export default function App() {
  
  // Criar a estrutura de rotas de navegação
  return (
    <Router>
      <div className="container mt-3">
        <nav className="text-center">
          <Link className="btn btn-outline-primary btn-sm m-1" to="/">Tarefas Simples</Link>
          <Link className="btn btn-outline-secondary btn-sm m-1" to="/status">Tarefas Com Status</Link>
          <Link className="btn btn-outline-danger btn-sm m-1" to="/supermercados">Lista de Supermercados</Link>
        </nav>

        <Routes>
          <Route path="/" element={<TarefasSimples />} />
          <Route path="/status" element={<TarefasComStatus />} />
          <Route path="/supermercados" element={<ListaSupermercado />} />
        </Routes>
      </div>
    </Router>
  )
}
