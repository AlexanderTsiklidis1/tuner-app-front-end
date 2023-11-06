import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"
// PAGES
import Edit from "../Pages/Edit";
import FourOFour from "../Pages/FourOFour";
import Home from "../Pages/Home";
import Index from "../Pages/Index";
import New from "../Pages/New";
import Show from "../Pages/Show";
import ArtistIndex from "../Pages/ArtistIndex";


import NavBar from "../Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Index />} />
            <Route path="/songs/new" element={<New />} />
            <Route path="/songs/:index" element={<Show />} />
            <Route path="/songs/:index/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
            <Route path ="/artists" element={<ArtistIndex/>} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
