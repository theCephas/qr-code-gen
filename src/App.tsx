import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Qrcode from './components/Qrcode';
import Basicqr from "../src/components/Qrstyles/Basicqr"
// import { AnimatePresence } from "framer-motion"



function App() {

  // const location = useLocation()

  return (
    <Router>
      {/* <AnimatePresence> */}
        <Routes 
        // location={location} key={location.key}
        >
          <Route path="/" element={<Home />} />
          <Route path="/Qrcode" element={<Qrcode />} />
          <Route path="/Basicqr" element={<Basicqr />} /> 
        </Routes>
      {/* </AnimatePresence> */}
    </Router>
  )
}

export default App
