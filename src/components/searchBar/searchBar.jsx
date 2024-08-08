import { useState } from 'react'
import './searchBar.scss'

const types=["buy","rent"];
function SearchBar(){
  
const[query,setquery]=useState({
  type:"buy",
  location:"",
  minPrice:0,
  maxPrice:0,
});
const switchtype=(val)=>{
   setquery((prev)=>({...prev,type:val}));
};
  return (
    <div className='searchBar'>
      <div className="type">
        {types.map((type)=>(
        <button onClick={()=>switchtype(type)} className={query.type == type?"active":""}>
          {type}
          </button>
        ))}
       
      </div>
        <form action="">
          <input type="text" placeholder='City Location' name='location'  />
          <input type="number" min={0} max={1000000000}  placeholder='Min Price' name='minPrice'  />
          <input type="number" min={0} max={1000000000} placeholder='Max Price' name='maxPrice'  />

          <button>
            <img src="./search.png" alt="" />
          </button>
        </form>
      
    </div>
  )
}

export default SearchBar