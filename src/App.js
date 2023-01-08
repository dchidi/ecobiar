import { Routes, Route } from "react-router-dom";
import Controller from "./pages/Controller";

function App() {
  return (
    <Routes>
      {/* home page */}
      <Route path="/" element={<Controller page="home" />} exact />
      <Route path="/home" element={<Controller page="home" />} />
      {/* Composter page */}
      <Route
        path="/composter_household"
        element={<Controller page="composter_household" />}
      />
      <Route
        path="/composter_commercial"
        element={<Controller page="composter_commercial" />}
      />

      <Route path="/contact" element={<Controller page="contact" />} />

      {/* page not found */}
      <Route path="*" element={<Controller page="page_not_found" />} />
    </Routes>
  );
}

export default App;
