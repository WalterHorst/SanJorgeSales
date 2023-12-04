import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Login from "./views/Login/Login";
import Footer from "./components/Footer/Footer";
import About from "./views/About/About";
import SignUp from "./views/SingUp/SingUp";
<<<<<<< HEAD
import AdminPanel from "./components/AdminBoard/AdminBoard"
import Tienda from "./views/Tienda/Tienda"
=======
import Store from "./views/Store/Store";
>>>>>>> 8e44b833431b68654a0726e484e74837b515d9c3

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
<<<<<<< HEAD
          <Route path="/admin" element={<AdminPanel></AdminPanel>}></Route>
          <Route path="/tienda" element={<Tienda></Tienda>}></Route>
=======
          <Route path="/store" element={<Store></Store>}></Route>
>>>>>>> 8e44b833431b68654a0726e484e74837b515d9c3
        </Routes>
        <Footer />
      </div>
    </main>
  );
}

export default App;
