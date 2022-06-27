import * as S from './styles';

export default function Navbar({ page }){
  return (
    <S.Navbar>
      <S.NavbarList>
        <S.NavbarItem className={page==="home"} > Home </S.NavbarItem>
        <S.NavbarItem className={page==="search"} > Search Students</S.NavbarItem>
        <S.NavbarItem className={page==="chat"} > Chat Room</S.NavbarItem>
      </S.NavbarList>
    </S.Navbar>
  );
}