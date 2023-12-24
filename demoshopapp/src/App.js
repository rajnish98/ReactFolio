import logo from './logo.svg';
import './App.css';
import Item from './components/Item'
import ItemDate from './components/ItemDate';
import Card from './components/card';

function App() { 
  // const itemTwoName = "SurfExcel";
  const response = [
    {
      itemName: "Nirma",
      itemDate: "20",
      itemMonth: "June",
      itemyear: "1998"
    },
    {
      itemName: "Nirma2",
      itemDate: "202",
      itemMonth: "June2",
      itemyear: "19981"
    },
    {
      itemName: "Nirma3",
      itemDate: "203",
      itemMonth: "June",
      itemyear: "19982"
    },
  ]
  return (
    <div>
    <Card>
    <Item name = {response[0].itemName}>hello everyone</Item>
    <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemyear}></ItemDate>
    <Item name = {response[1].itemName} ></Item>
    <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemyear}></ItemDate>
    <Item name = {response[2].itemName}></Item>
    <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemyear}></ItemDate>
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

    </Card>
   </div>
  );
}
 
export default App;
