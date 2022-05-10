import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import { CadastroUser } from "./pages/Register/User/CadastroUser";
import { UpdateUser } from "./pages/Update/User/UpdateUser";

export const Rotas = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastra-user" element={<CadastroUser />} />
                <Route path="/update-user/:id" element={<UpdateUser />} />
            </Routes>
        </Router>        
    );
}