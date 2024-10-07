import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "containers";
import { Home, AboutUs, ChatUs, TermsConditions, PrivacyPolicy } from "pages";
import GlobalStyles from "style/global";
import './tailwind.css';

function App(): JSX.Element {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/chatus" element={<ChatUs />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
