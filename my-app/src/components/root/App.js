import {Container} from "reactstrap"
import Navi from "../navi/Navi"
import Dashboard from "./Dashboard"
import {Switch,Route} from "react-router-dom";
import CartDetail from "../cart/CartDetail";

function App() {
  return (
    <div>
      <Container>
        <Navi/>
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route exact path="/product" component={Dashboard}></Route>
          <Route exact path="/cart" component={CartDetail}></Route>
        </Switch>
        
      </Container>

    </div>
  );
}

export default App;
