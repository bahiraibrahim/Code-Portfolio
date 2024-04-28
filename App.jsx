import Background from "./Component/background/Background";
import Contact from "./Component/contact/Contact";
import Header from "./Component/1-header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Component/footer/Footer";
import Hero from "./Component/2-hero/Hero";
import Main from "./Component/3-main/Main";
import { useEffect, useState } from "react";

function App() {


  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setScroll(true);
      }
      else {
        setScroll(false);
      }
    })
  }, [])

  const [scroll, setScroll] = useState(false)


  return (
    <div id="up" className="container">
      <Header />
      <Background />
      <Hero />
      <div className="line" />
      <Main />
      <div className="line" />
      <Contact />
      <div className="line" />
      <Footer />

      
        <a style={{opacity: scroll ? 1 : 0 , transition: "1s"}} href="#up">
          <button className="scroll2Top fas fa-arrow-up"></button>
        </a>
      

      <ToastContainer />
    </div>
  );
}

export default App;
