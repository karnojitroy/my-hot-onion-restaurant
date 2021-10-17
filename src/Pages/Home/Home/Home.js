import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';
import Menucategory from '../Mecnucategory/Menucategory';


const Home = () => {
    return (
        <div>
            <Router>
                <Menucategory></Menucategory>
                <Switch>
                    <Route path="/breakfast">
                        <Breakfast></Breakfast>
                    </Route>
                    <Route path="/lunch">
                        <Lunch></Lunch>
                    </Route>
                    <Route path="/dinner">
                        <Dinner></Dinner>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Home;