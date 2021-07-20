import { BrowserRouter as Router,Route,Link,Switch } from "react-router-dom";
import Header from "./components/header/header";
import Index from "./components/index";

function App() {
  return (
   <Router browserHistory>
     <Header/>
     <Switch>
      <Route exact path="/" component={Index} />
     </Switch>
   </Router>
  );
}

export default App;
