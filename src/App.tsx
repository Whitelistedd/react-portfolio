import { HomePage } from "./pages/HomePage"
import "aos/dist/aos.css"
import { Suspense, useEffect } from "react";
import Aos from "aos";

function App() {

  useEffect(() => {
    Aos.init();
  },[])

  return (
    <Suspense fallback={null} >
      <HomePage />
    </Suspense>
  );
}

export default App;
