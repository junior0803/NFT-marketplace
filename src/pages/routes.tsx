import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
import Errorpage from "./404Error";
import Articlepage from "./Article";
import Activitypage from "./activity";
import Signinpage from "./signin";
import Signup from "./signup";
import Forgetpassword from "./forget";
import Privacy from "./privacy";
import Blogpage from "./blog";
import Contactspage from "./contact";
import Explorerpage from "./explorer";
import Collectionpage from "./collection";
import Createpage from "./create";
import Home from "./home";
import RedirectPathToMarket from "./Redirects";
import Header from "./header";
import Footer from "./footer";

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/Error">
                    <Errorpage />
                </Route>
                <Route path="/Article"> <Articlepage /></Route>
                <Route path="/Activity"> <Activitypage /></Route>
                {/*<Route path="/Signin">*/}
                {/*    <Signinpage />*/}
                {/*</Route>*/}
                <Route path="/Signup"> <Signup /></Route>
                <Route path="/forget"> <Forgetpassword /></Route>
                <Route path="/privacy"> <Privacy /></Route>
                <Route path="/blog"> <Blogpage /></Route>
                {/*<Route path="/contacts"> <Contactspage /></Route>*/}
                <Route path='/explorer'> <Explorerpage /></Route>
                <Route path='/collection'> <Collectionpage /></Route>
                <Route path='/create'> <Createpage /></Route>
                <Route path="/"> <Home /></Route>
            </Switch>
        </Router>
    );
}

export default Router;
