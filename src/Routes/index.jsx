import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chatroom from "../Pages/Chatroom";
import Main from "../Pages/Main";
import Search from "../Pages/Search";

export default function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/chat" element={<Chatroom/>} />
        <Route path="/search" element={<Search/>} />
      </Routes>
    </BrowserRouter>
  );
}
