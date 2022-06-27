import * as S from './styles';

export default function Navbar({ page }){
  return (
    <S.Navbar>
      <S.NavbarList>
        <S.NavbarItem className={page==="home"} > Home </S.NavbarItem>
        <S.NavbarItem className={page==="search"} > Buscar alunos</S.NavbarItem>
        <S.NavbarItem className={page==="chat"} > Sala de conversa</S.NavbarItem>
      </S.NavbarList>
    </S.Navbar>
  );
}