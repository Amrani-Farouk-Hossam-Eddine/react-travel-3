import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Offers from "./components/Offers";
import Rooms from "./components/Rooms";
import Travel from "./components/Travel";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Offers />
      <Travel />
      <Rooms />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
