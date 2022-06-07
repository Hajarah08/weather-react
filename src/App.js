import logo from './logo.svg';
import './App.css';
import City from "./City";
import Temperature from "./Temperature";
import Form from "./Form";
import Component from "./Component";

export default function App() {
  return (
    <div className="container">
      <City />
      <Temperature />
      <Component />
      <Form />
      <hr />
      <div> 5days Forecast</div>
      <hr />
    </div>
  );
}
