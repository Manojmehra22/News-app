import React from "react";
import Navbar from "./Components/Navbar.jsx";
// import NewsItems from "./Components/NewsItems.jsx";

import NewsBoard from "./Components/NewsBoard.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <NewsBoard />
      {/* <NewsItems /> */}
    </div>
  );
};

export default App;
