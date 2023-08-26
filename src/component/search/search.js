import "./search.css"

export const Search=({searchData, setSearchData,data})=>{
    const search=(e)=>{
        setSearchData(e.target.value)
        
        console.log(searchData);
    }
    const click=()=>{
        let x = data.filter((item =>{
            console.log((item.name).search(searchData))
            if((item.name).search(searchData) !== -1){
                return item
            }
        }))

        

        console.log(x);
    }
     
    return(
        <div>
            <input className="searchInput" placeholder="search" onChange={(e)=>search(e)} value={searchData}></input>
            <button className="searchButton"  onClick={() => click()}>SEARCH</button>
        </div>
    )
}