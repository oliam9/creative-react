import React from 'react';
//global style
import GlobalStyle from './components/GlobalStyle';
//import pages
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
//router
import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
//animation
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes
          location={location}
          key={location.pathname}
        >
          <Route
            path="/"
            exact
            element={<AboutUs />}
          />
          <Route
            path="/aboutus"
            exact
            element={<AboutUs />}
          />
          <Route
            path="/ourwork"
            exact
            element={<OurWork />}
          />

          <Route
            path="/work/:id"
            exact
            element={<MovieDetail />}
          />

          <Route
            path="/contactus"
            exact
            element={<ContactUs />}
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
