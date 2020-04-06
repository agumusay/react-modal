import React from "react";

//Styles
import "./styles/App.scss";

//Data
import employees from "./data/employees.json";

//Components
import SiteHeader from "./components/site-header";
import CardsContainer from "./components/cardsContainer";
import SiteFooter from "./components/site-footer";
import Modal from "./components/modal";

function App() {
  return (
    <main className="App">
      <SiteHeader />
      <p className="cards-container-info">
        Our team of <span className="employee-count">{employees.length}</span> strategists,
        designers, managers, developers make custom products for startups and leading brands.
      </p>
      <CardsContainer employees={employees} />
      <SiteFooter />
      <Modal></Modal>
    </main>
  );
}

export default App;
