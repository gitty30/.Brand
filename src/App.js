
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Support from "./components/Support";
import AllInOne from "./components/AllInOne";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
function App() {

  return (
    <>
      {/* <h1 className="text-4xl text-center ">Hello</h1>
       */}
       <Navbar/>
       <Hero/>
       <About/>
       <Support/>
       <AllInOne/>
       <Pricing/>
       <Footer/>
    </>
  );
}

export default App;
