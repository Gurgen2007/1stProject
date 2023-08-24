import  "./product.css"

export const Product=({item, handlerDelete, handlerEdit})=>{
    return (
                <div className="itmm">
                    <img src="/assest/img.jpg" className="img"/>
                    <p className="productName" >{item.name}</p>
                    <p className="productName" >{item.desc}</p>
                    <button className="deletebtn" onClick={() => handlerDelete(item.name) }>delete</button>
                    <button onClick={() => handlerEdit(item)}>croisant</button>
                </div>)
}