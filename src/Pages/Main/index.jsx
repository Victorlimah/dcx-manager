import * as S from "./styles";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";

export default function Main(){

  return (
    <>
      <Header />
      <Navbar/>
      <Content/>
    </>
  );

  function Content(){
    return (
      <div>
        oi
      </div>
    )
  }
}