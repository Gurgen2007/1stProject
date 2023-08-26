import { useState } from "react"
import "./model.css"

export const Model=({style, itemData})=>{
    const [name, setName] = useState()
    const [desc, setDesc] = useState()
    
    return (
        <div style={{display: style}}>
            <div className="nigger">
                <input type="text" placeholder="image" className="model1" value={itemData.image}></input>
                <input type="text" placeholder="name" className="model2" value={itemData.name}></input>
                <input type="text" placeholder="description" className="model3" value={itemData.desc}></input>
                <button className="update">UPDATE</button>
            </div>
        </div>
    )
} 