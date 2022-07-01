import { HomePage } from "./pages/HomePage"
import "aos/dist/aos.css"
import { useEffect } from "react";
import Aos from "aos";

function App() {

  useEffect(() => {
    Aos.init();
  },[])

  return (
    <HomePage />
  );
}

export default App;
