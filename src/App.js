import logo from './logo.svg';
import './App.css';
import { Input } from './component/input/input';
import { Button } from './component/button/button';
import { useState } from 'react';
import { Product } from './component/product/product';
import { fakedata } from './component/product/fakedata';
import { Plus } from './component/plus/plus';
import { Model } from './component/model/model';
import { Search } from './component/search/search';



function App() {
  const [data, setData] = useState(fakedata)
  const [isShow, setShow] = useState("none")
  const [itemData, setItemData] = useState({image:"", name:"", desc:""})
  const [searchData, setSearchData] = useState()
  // const [color, setColor] = useState('black')
  // const changeColor = () => {
  //   setColor(data)}

  

    const handlerEdit = (item) => {
        setItemData(item)
        console.log(item);
        if (isShow == 'block') {
          setShow('none')
        } else {
          setShow('block') 
        } 
    }

const handlerDelete=(name)=>{
    setData((state) =>{
      let x = state.filter((item => item.name !== name ))
      return [...x]
    })
    console.log(data);
}



// const searchFilter=()=>{
//     setSearchData(()=>{

//     })
    
// }

// console.log("aaaaaaaa");

  return (
    <div className="App">
      {/* <Input tip="color" setData = {setData} placeholderr="string" value={6} />
      <Button data={data} onChange={changeColor} />
      <div className='divv' style={{backgroundColor: color}}></div> */}
      <Model itemData={itemData} style={isShow}/>
      <Search data={data} setSearchData={setSearchData} searchData={searchData}/>     
      
      {fakedata.map((item)=>{
          return ( <Product handlerEdit={handlerEdit} handlerDelete={handlerDelete} item={item} />)
      })}
  
      {/* <Plus/> */}
    </div>
  );
    }
export default App;