import { Route, Routes, BrowserRouter as Router  } from "react-router-dom";
import Homepage from "./Home/Homepage";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />            
          </Routes>
      </Router>

    </div>
  );
}

export default App;
