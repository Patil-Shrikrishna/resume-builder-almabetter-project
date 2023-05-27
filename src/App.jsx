import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Form from "./pages/Form";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
