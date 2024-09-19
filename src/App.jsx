import React from "react";
import Headers from "./Headers/Headers";
import LandingItem from "./LandingItem/LandingItem";
import Variant from "./Variant/Variant";
import Mysection from "./ParagraphSection/Mysection";
import Features from "./Features/Features";
import Workflow from "./Workflow/Workflow";
import Solution from "./Solution/Solution";
import Pricing from "./Pricing/Pricing";
import Purchasepara from "./Purchasepara/Purchasepara";
import Footer from "./Footer/Footer";
const App = () => {
  return (
    <div>
      <Headers />
      <LandingItem />
      <Variant />
      <Mysection />
      <Features />
      <Workflow />
      <Solution />
      <Pricing />
      <Purchasepara />
      <Footer />
    </div>
  );
};
export default App;
