import NavBar from "./components/navBar";
import { Route, Switch, Redirect } from "react-router-dom"
import Login from "./components/login";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Stats from "./components/stats";
import NotFound from "./components/not-found";


function App() {
  return (
    <div>
      <NavBar />
      <h1>App</h1>
        <Switch>
        <Route path="/" exact component={ Home }  />
        <Route path="/dashboard/stats" component={ Stats }  />
        <Route path="/dashboard"  component={ Dashboard }/>
        <Route path="/login" component={ Login }  />
        <Route path="/posts/:postId?" component={Posts} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
        <Redirect from="/admin" to="/dashboard" />
      </Switch>
    </div>  
  );
}

export default App;
// render={(props) => <Dashboard isAdmin={false} {...props} />}
// path="/posts/:postId?/:display?" component={Posts}
