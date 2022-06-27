import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../Pages/Main";

export default function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/chat" element={<h1>Página inicial</h1>} />
        <Route path="/search" element={<h1>Página procurar alunos</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
