import logo from './logo.png';
import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className='App-logo img-fluid' alt="logo" />
        </header>

        <main>
          <Dictionary defaultKeyword="peace" />
        </main>
        <footer className='App-footer'>Coded by Iryna Polchaninova and it is <a href="https://github.com/IraPolchanin/dictionary-project" target="_blank" rel="noopener noreferrer">open-sourced</a>
        </footer>
      </div>
    </div>
  );
}


