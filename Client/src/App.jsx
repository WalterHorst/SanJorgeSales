import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Login from "./views/Login/Login";
import Footer from "./components/Footer/Footer";
import About from "./views/About/About";
import SignUp from "./views/SingUp/SingUp";

function App() {
  return (
    <main>
      <NavBar></NavBar>
      <div className="superContainer">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/registro" element={<SignUp></SignUp>}></Route>
        </Routes>
        <Footer />
      </div>
    </main>
  );
}

export default App;
