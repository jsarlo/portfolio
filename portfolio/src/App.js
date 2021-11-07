import './App.css';
import './Components/About';
import About from './Components/About';
import Header from './Components/Header';
import 'rsuite/dist/rsuite.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
    </div>
  );
}

export default App;
