import logo from './logo.svg';
import './App.css';
import { Input } from './component/input/input';

function App() {
  return (
    <div className="App">
      <Input tip="number" placeholderr="number" value={18}/>
      <Input tip="string" placeholderr="string" value={6} />
    </div>
  );
}

export default App;
