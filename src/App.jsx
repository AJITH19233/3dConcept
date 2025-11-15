import Header from "./components/Header";
import InteriorHero from "./components/InteriorHero";
import CompanyMotive from "./components/CompanyMotive";
import VisionValues from "./components/VisionValues";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactCTA from "./components/ContactCTA";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Footer from "./components/Footer";
import './index.css';

function App() {
  return (
    <>
      <Header />
      <InteriorHero/>
      <CompanyMotive/>
      <VisionValues/>
      <Portfolio/>
      <WhyChooseUs/>
      <ContactCTA/>
      <Services/>
      <Footer/>
    
    </>
  );
}

export default App;
