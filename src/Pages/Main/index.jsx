import * as S from "./styles";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";

export default function Main(){

  return (
    <>
      <Header />
      <Navbar page=""/>
      <Content/>
    </>
  );

  function Content(){
    return (
      <S.Content>
        <div>
          <S.ContentTitle>Página inicial</S.ContentTitle>
          <S.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, nisi eu consectetur consectetur, nisl nisl
            consectetur nisl, eget consectetur nisl nisl eget nisl.
          </S.Description>
        </div>
      </S.Content>
    );
  }
}