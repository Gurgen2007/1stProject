import logo from './logo.svg';
import './App.css';
import { Input } from './component/input/input';
import { Button } from './component/button/button';
import { useState } from 'react';
import { Product } from './component/product/product';
import { fakedata } from './component/product/fakedata';
import { Plus } from './component/plus/plus';
import { Model } from './component/model/model';



function App() {
  const [data, setData] = useState(fakedata)
  const [isShow, setShow] = useState("none")
  // const [color, setColor] = useState('black')
  // const changeColor = () => {
  //   setColor(data)


const handlerDelete = (name) => {
    setData((state) =>{
      let x = state.filter((item => item.name !== name ))
      return [...x]
   
    })
    console.log(data);
}

  return (
    <div className="App">
      {/* <Input tip="color" setData = {setData} placeholderr="string" value={6} />
      <Button data={data} onChange={changeColor} />
      <div className='divv' style={{backgroundColor: color}}></div> */}
     <Model style={isShow}/>
     <button onClick={() => { 
      if (isShow == 'block') {
          setShow('none')
      } else {
        setShow('block') 
      }
     }}>OPEN</button>
     
      {fakedata.map((item)=>{
          return ( <Product handlerDelete={handlerDelete} item = {item} />)
      })}
  
      {/* <Plus/> */}
    </div>
  );
    }
export default App;