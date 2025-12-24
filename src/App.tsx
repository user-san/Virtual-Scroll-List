import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { List } from "./List";
import { NavBar } from "./components/NavBar";
import { Gallery } from "./Gallery";

function App() {
  return (
    <>
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/list" element={<List />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
