
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Light from "./pages/Light_digital/index.jsx";
import Not from "./pages/not_found/index.jsx";



export default function Navegacao() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Light />} />
                <Route path="*" element={<Not />} />
            </Routes>
        </BrowserRouter>
    )
}