import React from 'react';

import NfcRoutes from "./routes/index";
import Header from "./pages/header";
import Footer from "./pages/footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
        {/*<Routes />*/}
        <Router>
            <Header/>
            <NfcRoutes />
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
