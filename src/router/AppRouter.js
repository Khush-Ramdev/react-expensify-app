import React from 'react';
import { BrowserRouter, Route, Switch ,Link ,NavLink} from 'react-router-dom';
import ExpenseDashboardPage from "./../components/ExpesneDashboardPage"
import AddExpensePage from "./../components/AddExpensePage"
import EditExpensePage from "./../components/EditExpensePage"
import HelpPage from "./../components/HelpPage"
import ErrorPage from "../components/NotFoundPage"
import Header from "./../components/Header"

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={ErrorPage}/>
        </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;