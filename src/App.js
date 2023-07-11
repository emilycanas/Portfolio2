import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Pages from "./pages";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";

function App() {
  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

  let location = useLocation();

  console.log("pathname", location);

  return (
    <>
      <div className="progress "></div>
      <div className="bg_color ">
      <TopNav></TopNav>
      <Routes>
        <Route
          exact
          path="/"
          name="Home"
          element={
            <React.Suspense fallback="Loading...">
              <Pages.Home />
            </React.Suspense>
          }
          //element = {<Pages.Home/>}
        ></Route>
        <Route
          exact
          path="/gems"
          name="Gems"
          element={
            <React.Suspense fallback="Loading...">
              <Pages.Gems />
            </React.Suspense>
          }
        ></Route>
        <Route
          exact
          path="/carte"
          name="Carte"
          element={
            <React.Suspense fallback="Loading...">
              <Pages.Carte />
            </React.Suspense>
          }
        ></Route>
        <Route
          exact
          path="/about"
          name="About"
          element={
            <React.Suspense fallback="Loading...">
              <Pages.About />
            </React.Suspense>
          }
        ></Route>
        <Route
          exact
          path="/contact"
          name="Contace"
          element={
            <React.Suspense fallback="Loading...">
              <Pages.Contact />
            </React.Suspense>
          }
        ></Route>
      </Routes>
      {location.pathname === "/contact" ? (
        console.log("Contact Page, do not show footer")
      ) : (
        <Footer />
      )}
      </div>
    </>
  );
}

export default App;
