import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom"
import Login from "./components/login";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Stats from "./components/stats";


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
        <Route
          path="/posts/:postId?" component={Posts}
      />
      </Switch>
    </div>  
  );
}

export default App;
// render={(props) => <Dashboard isAdmin={false} {...props} />}