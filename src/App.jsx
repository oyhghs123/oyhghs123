import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Gal from "./com/Gal";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Gal />
      </main>
      <Footer />
    </div>
  );
};

export default App;
