import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export default function Navbar({ page }) {
  const navigate = useNavigate();

  return (
    <S.Navbar>
      <S.NavbarList>
        <S.NavbarItem onClick={() => navigate("/")} className={page === "home"}>
          Home
        </S.NavbarItem>
        <S.NavbarItem onClick={() => navigate("/search")} className={page === "search"}>
          Buscar alunos
        </S.NavbarItem>
        <S.NavbarItem onClick={() => navigate("/chat")} className={page === "chat"}>
          Sala de conversa
        </S.NavbarItem>
      </S.NavbarList>
    </S.Navbar>
  );
}
