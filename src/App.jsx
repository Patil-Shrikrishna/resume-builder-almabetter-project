import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      {/* <Routes>
        <Route index element={<Home />} /> */}
        {/* <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="/preview" element={<Preview />} /> */}

        {/* 404 page */}
        {/* <Route path="*" element={<NotFound />} /> */}
      {/* </Routes> */}
    </>
  );
}

export default App;
