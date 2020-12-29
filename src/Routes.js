import React from 'react'
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Home from './Component/Home';
import Productitem from './Component/Productitem'
import Footer from './Component/Footer';
import Header from './Component/Header';
import ScrollToTop from 'react-router-scroll-top'

function Routes() {
    return (
        <div>
            <Router>
                <ScrollToTop >
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/product/:id" component={Productitem} />
                    <Route path="*" component={()=> <h1>404 Error</h1> } />
                </Switch>
                <Footer/>
                </ScrollToTop>
            </Router>
        </div>
    )
}

export default Routes
