import { Route, Routes } from "react-router-dom";
import { Header } from "./components/atoms";
import { Home, Collection, Testimonials, Product, Contact } from "./pages";

const App = () => {
  return (
    <main className="overflow-hidden text-[#404040]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  )
}

export default App;