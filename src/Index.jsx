import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Navbar from "./Navbar/Navbar";
import Details from "./Details/Details";
import Watchlist from "./Watchlist/Watchlist";
import Footer from "./Footer/Footer";
import Error from "./Error";
const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Index;