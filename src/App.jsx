import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./home/Home"
import Blog from "./blog/BlogPage" 
import SingleBlog from "./blog/SingleBlog"
import About from "./aboutUs/AboutUs"
import ProductsPage from "./product/ProductsPage"
import SingleProduct from "./product/SingleProduct"
import TermsOfService from "./pages/TermsOfService"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import Navbar from "./common/Navbar"
import Footer from "./common/Footer"
import NotFound from "./common/NotFound"


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
