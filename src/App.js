import logo from './logo.svg';
import './App.css';
import { Input } from './component/input/input';

function App() {
  return (
    <div className="App">
      <Input tip="number" placeholderr="number" />
      <Input tip="string" placeholderr="string" />
    </div>
  );
}

export default App;
