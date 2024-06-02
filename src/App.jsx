import "./assets/globals.css";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Tracks from "./Pages/Tracks/Tracks";
import Leaders from "./Pages/Leaders/Leaders";
import Events from "./Pages/Events/Events";
import { BrowserRouter, Routes,Route } from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
     <Header />
    <Routes> 
      <Route path="/" element={<Home/>}/>
      <Route path="/tracks" element={<Tracks/>}/>
      <Route path="/leaders" element={<Leaders/>}/>
      <Route path="/events" element={<Events/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
