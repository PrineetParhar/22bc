import "./App.css";
import Navbar from "./components/Navbar";
import MainForm from "./pages/MainForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainForm />} />
        {/* <Route path="/sign-up" element={<SignUp/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
