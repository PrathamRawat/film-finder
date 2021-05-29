import {Redirect, Route, Switch} from 'react-router-dom';
import Home from "../pages/Home";

export default () => {

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
        </Switch>
    );
};