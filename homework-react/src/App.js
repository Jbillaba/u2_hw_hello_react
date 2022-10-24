import './App.css';
import Hello from './hello';

const names = ['Eddie Van Halen', 'Jimi Hendrix', 'Wes Montgomery', 'Frank Zappa', 'John Mayer']

const myName = "Jeremy"

function App(props) {
  return (
    <div className="App">
      <Hello name={names[1]}/>
      <Hello name={names[2]}/>
      <Hello name={names[3]}/>
      <Hello name={names[4]}/>
      <Hello name={myName}/>

    </div>
  );
}

export default App;
