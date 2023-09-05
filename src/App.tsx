import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Qrcode from './components/Qrcode';
import Basicqr from "../src/components/Qrstyles/Basicqr"
import BrownBlack from './components/Qrstyles/BrownBlack';
import PinkBlack from './components/Qrstyles/PinkBlack';
import SilverGreen from './components/Qrstyles/SilverGreen';
import OrangeBlack from './components/Qrstyles/OrangeBlack';


function App() {


  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Qrcode" element={<Qrcode />} />
        <Route path="/Basicqr" element={<Basicqr />} />
        <Route path="/BrownBlack" element={<BrownBlack />} />
        <Route path="/PinkBlack" element={<PinkBlack />} />
        <Route path="/SilverGreen" element={<SilverGreen />} />
        <Route path="/OrangeBlack" element={<OrangeBlack />} />
      </Routes>

    </Router>
  )
}

export default App
