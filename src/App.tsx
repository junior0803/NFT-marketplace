import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/home'

import Errorpage from './pages/404Error'
import Articlepage from "./pages/Article";
import Header from "./pages/header";
import Footer from "./pages/footer";
import Activitypage from "./pages/activity";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Forgetpassword from "./pages/forget";
import Privacy from "./pages/privacy";
import Blogpage from "./pages/blog";
import Contactspage from "./pages/contact";
import Explorerpage from "./pages/explore";

function App() {
  return (
   <Router>
    <div className="App">
        <Header/>
        <Route path="/" exact component={Home} />
        <Route path="/Error/" component={Errorpage} />
        <Route path="/Article/" component={Articlepage} />
        <Route path="/Activity/" component={Activitypage} />
        <Route path="/Signin/" component={Signin} />
        <Route path="/Signup/" component={Signup} />
        <Route path="/forget/" component={Forgetpassword} />
        <Route path="/privacy/" component={Privacy} />
        <Route path="/blog/" component={Blogpage} />
        <Route path="/contacts/" component={Contactspage} />
        <Route path='/explorer' component={Explorerpage} />
        <Footer/>
    </div>
   </Router>
  );
}

export default App;
