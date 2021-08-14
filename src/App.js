import One from './components/one/One'
import Two from './components/two/Two'
import Three from './components/three/Three'
import './App.css';

function App() {
  return (
    <div className="grid-container">
      <div className="one" >
        <One />
      </div>
      <div className="two" >
        <Two />
      </div>
      <div className="three">
        <Three />
      </div>
    </div>
  );
}

export default App;
