import { Route, Routes, BrowserRouter as Router  } from "react-router-dom";
import Homepage from "./Home/Homepage";
import Bagitempage from "./Bags/Bagitempage";
import Footwearitemspage from "./Footwear/Footwearitemspage";
import Campfurniturepage from "./Campfurniture/Campfurniturepage";
import Survivalaidpage from "./Survivalaid/Survivalaidpage";
import Fishingequipmentspage from "./Fishingquipment/Fishingequipmentspage";
import Hikingequipmentspage from "./Hikingequipments/Hikingequipmentspage";


function App() {
  return (
    <div className="App font-Montserrat">
      <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />  
            <Route path="/bags" element={<Bagitempage />} />            
            <Route path="/footwears" element={<Footwearitemspage />} />            
            <Route path="/campfurniture" element={<Campfurniturepage />} />      
            <Route path="/survivalaid" element={<Survivalaidpage />} />      
            <Route path="/fishingequipments" element={<Fishingequipmentspage />} />        
            <Route path="/hikingequipments" element={<Hikingequipmentspage />} />            
          </Routes>
      </Router>

    </div>
  );
}

export default App;
