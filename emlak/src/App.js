import "./App.css";
import Routes from "./layouts/Routes";
import Navi from "./layouts/Navi";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Navi />
      <Container>
        <Routes />
      </Container>
    </div>
  );
}

export default App;
