import './App.css';

function App() {

  var textArray = ['nyu', 'rutgers', 'njit']
  const randomIndex = Math.floor(Math.random() * textArray.length); 
  const randomElement = textArray[randomIndex];

  return (
    <div className="App">
      <h1>Hello {randomElement}</h1>
    </div>
  );
}

export default App;
