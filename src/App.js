import logo from './logo.svg';
import './App.css';
import { Input } from './component/input/input';
import { Button } from './component/button/button';
import { useState } from 'react';

function App() {
  const [data, setData] = useState()
  const [color, setColor] = useState('black')
  const changeColor = () => {
    
    setColor(data)
   
}
  return (
    <div className="App">
      <Input tip="color" setData = {setData} placeholderr="string" value={6} />
      <Button data={data} onChange={changeColor} />
      <div className='divv' style={{backgroundColor: color}}></div>
    </div>
  );
}

export default App;
