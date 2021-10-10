import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Errorpage from "../pages/404Error";
import Articlepage from "../pages/Article";
import Activitypage from "../pages/activity";
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import Forgetpassword from "../pages/forget";
import Privacy from "../pages/privacy";
import Blogpage from "../pages/blog";
import Contactspage from "../pages/contact";
import Explorerpage from "../pages/explorer";
import Collectionpage from "../pages/collection";
import Createpage from "../pages/create";
import itemPage from "../pages/item";
import Home from "../pages/home";
import RedirectPathToMarket from "../pages/Redirects";
import React, {useEffect} from "react";
import authorPage from "../pages/author";
import {useLocation} from "react-router";

function NfcRoutes () {

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    },[location]);

    return(
        <div>
            <Switch>
                <Route path="/Error" component={Errorpage} />
                <Route path="/Article" component={Articlepage} />
                <Route path="/Activity" component={Activitypage} />
                <Route path="/Signin" component={Signin} />
                <Route path="/Signup" component={Signup} />
                <Route path="/forget" component={Forgetpassword} />
                <Route path="/privacy" component={Privacy} />
                <Route path="/blog" component={Blogpage} />
                <Route path="/contacts" component={Contactspage} />
                <Route path='/explorer' component={Explorerpage} />
                <Route path='/collection' component={Collectionpage} />
                <Route path='/create' component={Createpage} />
                <Route path='/item' component={itemPage} />
                <Route path='/author' component={authorPage} />
                <Route path="/">
                    <Home/>
                </Route>
                <Route component={RedirectPathToMarket} />
            </Switch>
        </div>
    )
}

export default NfcRoutes
