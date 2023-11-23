import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login"
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
