import style from "./input.css"
import { useState } from "react"


export const Input=({tip, placeholderr, value})=>{
    const [data, setData] = useState(value || 10)
    let bgcolor;
    let types;
    if (value<=1 && value>=5) {
        bgcolor = 'red'
        types = 'number'
    } else if(value>=6 && value<=10){
        bgcolor = 'blue'
        types = 'string'
    } else if(value >= 11){
        bgcolor = 'green'
        types = 'string'
    }
    return (<input type={types} placeholder={placeholderr} value={data} style={{color:bgcolor}}/>)
}