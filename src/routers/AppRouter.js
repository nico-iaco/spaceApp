import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "../components/Home";
import Earthquake from "../components/Earthquake";
import Volcano from "../components/Volcano";
import Storm from "../components/Storm";
import Tsunami from "../components/Tsunami";
import GamePage from "../components/GamePage";

const AppRouter = (props) => (
    <BrowserRouter>
                <Switch>
                    <Route path={"/game"} component = {GamePage} />
                    <Route path={"/tsunami"} component = {Tsunami} />
                    <Route path={"/storm"} component = {Storm} />
                    <Route path={"/volcano"} component = {Volcano} />
                    <Route path={`/earthquake`} component = {Earthquake} />
                    <Route path={"/"} component = {Home} exact/>
                </Switch>
    </BrowserRouter>
);

export default AppRouter;