import "./styles.css";
import Clicker from "./Clicker";

export default function App() {
  return (
    <div className="App">
      <Clicker message="HI!!!!" buttonText="Please Click Me" />
      <Clicker message="Please Stop Clicking Me!" buttonText="do not click" />
    </div>
  );
}
