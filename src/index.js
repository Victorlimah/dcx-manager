import Routes from "./Routes";
import ReactDOM from "react-dom";
import GlobalStyle from "./Styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
