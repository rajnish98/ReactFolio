import logo from './logo.svg';
import './App.css';
import Item from './components/Item'
import ItemDate from './components/ItemDate';

function App() { 
  const itemTwoName = "SurfExcel";
  return (
    <div>
    <Item name = "Nirma"></Item>
    <ItemDate day="20" month="June" year="1998"></ItemDate>
    <Item name = {itemTwoName} ></Item>
    <ItemDate day="22" month="July" year="1999"></ItemDate>
    <Item name = "555"></Item>
    <ItemDate day="23" month="August" year="2000"></ItemDate>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello world
        </a>
      </header> */}
       Hello world
    </div>
   </div>
  );
}
 
export default App;
