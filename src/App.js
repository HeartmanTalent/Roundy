import logo from './logo.svg';
import './App.css';
import './main.css';
import SimplexNoise from 'simplex-noise';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Main from './Main'
function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;