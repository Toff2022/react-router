import { Route, Switch, Link } from "react-router-dom";
import Stats from "./stats";
import Edit from "./edit";

const Dashboard = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/dashboard/edit">Edit</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/dashboard/" exact component={Stats} />
                <Route path="/dashboard/edit" component={Edit} />
            </Switch>
        </div>
    );
};

export default Dashboard;
