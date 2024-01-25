import logo from './logo.svg';
import './App.css';
import CountDown from './components/timer/timer';

function App() {
  const appStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };
  return (
    <div className="App" style={appStyle}>
      <CountDown/>
    </div>
  );
}

export default App;
