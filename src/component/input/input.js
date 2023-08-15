import style from "./input.css"
import { useState } from "react"    


export const Input=({tip, placeholderr, value, setData})=>{
    // const [data, setData] = useState(value || 10)
    // let bgcolor;
    // let types;
    // if (value<=1 && value>=5) {
    //     bgcolor = 'red'
    //     types = 'number'
    // } else if(value>=6 && value<=10){
    //     bgcolor = 'blue'
    //     types = 'string'
    // } else if(value >= 11){
    //     bgcolor = 'green'
    //     types = 'color'
    // }
    const changeColor = (e) => {
        // console.log(e.target.value);
        setData(e.target.value)
    }

    return (<input type={tip} onChange={(e) => changeColor(e)} placeholder={placeholderr}/>)
}