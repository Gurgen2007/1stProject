import "./model.css"

export const Model=({style})=>{
    return (
        <div style={{display: style}}>
            <div className="nigger">
                <input type="text" placeholder="image"></input>
                <input type="text" placeholder="name"></input>
                <input type="text" placeholder="description"></input>
                <button className="update">UPDATE</button>
            </div>
        </div>
    )
} 