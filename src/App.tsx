import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "containers";
import { Home, AboutUs, ChatUs, FAQ } from "pages";
import GlobalStyles from "style/global";

function App(): JSX.Element {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/chatus" element={<ChatUs />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes> */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
