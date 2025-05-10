import logo from './logo.svg';
import './App.css';
import audioFile from './niggers.mp3';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <audio src={audioFile} controls loop autoPlay muted={false}></audio>
      </header>
    </div>
  );
}

export default App;
