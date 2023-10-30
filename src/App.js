import "./App.scss"

import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Blog from "./pages/Blogs/Blog"
import About from "./pages/About/About"

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="menu" element={<Menu />} />
                <Route path="blog" element={<Blog />} />
                <Route path="about" element={<About />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
