import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BurgerView from "./component/BurgerView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BurgerView />} />
      </Routes>
    </Router>
  );
}

export default App;
