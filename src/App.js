import logo from './logo.svg';
import './App.css';

function App() {
  const number = 1;
  return (
    <div className="App">
      <p>{number >= 3 ? number + "은 3보다 크거나 작다" : number + "은 3보다 작다"}</p>
    </div>
  );
}

export default App;
