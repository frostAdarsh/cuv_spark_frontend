import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Intro from "./pages/Intro";
import Super from "./pages/Super";
import Links from "./pages/Links";
import Appearance from "./pages/Appearance";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";
import Sidebar from "./components/Sidebar"; 
// import Showname from "./components/showname";

const AppLayout = () => {
  const location = useLocation();
  
  
  const showSidebar = ["/links", "/appearance", "/settings", "/analytics"].some(path =>
    location.pathname.startsWith(path)
  );

  return (
    <div className="app-container" style={{ display: "flex" }}>
      {showSidebar && <Sidebar />}
      <div className="main-content" style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/super" element={<Super />} />
          <Route path="/links" element={<Links />} />
          <Route path="/appearance" element={<Appearance />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/analytics" element={<Analytics />} />
          
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
};

export default App;
