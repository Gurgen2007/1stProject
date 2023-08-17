import  "./product.css"

export const Product=({item})=>{
    return (
                <div className="itmm">
                    <img src="/assest/img.jpg" className="img"/>
                    <p className="productName" >{item.name}</p>
                    <p className="productName" >{item.desc}</p>
                </div>)
}