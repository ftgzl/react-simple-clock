import './App.css';
import Clock from './components/Clock';

function App() {

  const myStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 'auto',
    alignItems: 'center',
    width: 250,
    height: '100%',
    backgroundColor: "green",
    color: "white",
  }

  return (
    <div className="App" style={myStyle}>
      <Clock />
    </div>
  );
}

export default App;
