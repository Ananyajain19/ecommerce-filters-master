import React from 'react'
import './Products.css'

function ValueFromUrl ({data,field ,searchParams ,setSearchParams}){

  const filterid = searchParams.get(field);
  if(!filterid){
    return
  }
  let filtername = ''
    data.map((itemname) => {
      if (itemname.id === filterid){
        filtername= itemname.name;
      }})
  return (
      <span className='filter-name'>
        <div>
          {field}{" "}:{" "}{filtername}
        </div>
        <div className='cross' onClick={() => {
          searchParams.delete(filterid)
          setSearchParams(searchParams)
        }}>&times;</div>
      </span>
      
  );
}

function SortBy({searchParams,setSearchParams}){
  let findSortby=searchParams.get("orderby");
    if (!findSortby) {
      console.log("empty")
      return 
    }
    let displayValue=""
    if(findSortby==="priceASC"){
      displayValue="Price : Low to High"
    } else if(findSortby==="priceDSC"){
      displayValue="Price : High to Low"
    } else if( findSortby==="newest"){
      displayValue="Sort : Newest"
    } else if(findSortby==="hotgifts"){
      displayValue="Sort : Hotgifts"
    } else if(findSortby==="promotions"){
      displayValue="Sort : Promotion"
    } else if(findSortby==="toandfrom"){
      displayValue="Sort : To&From Marketplace"
    }
    return(
  
      <span className='sortbyname'>
      <div className='sortbyclass'>
        {displayValue}
      </div>
       <div className='cross' onClick={() => {
        searchParams.delete("orderby")
        setSearchParams(searchParams)
      }}>&times;</div>
      </span>
    );
}
export default function Products({state , setState , searchParams ,setSearchParams , genderId , occasionId , relationshipId , setGenderId , setOccasionId,setRelationshipId , sortBy , setSortBy}) {
  return (
    <div className='show-filters'>
    <div className='Product-screen'>
      Filters:
      <div className='filtername'>
      <ValueFromUrl data = {state.genders} field = {"gender"} searchParams={searchParams} setSearchParams={setSearchParams}/>
      <ValueFromUrl data = {state.occasions} field = {"occasion"} searchParams={searchParams} setSearchParams={setSearchParams}/>
      <ValueFromUrl data = {state.relationships} field = {"relationship"} searchParams={searchParams} setSearchParams={setSearchParams}/>
      </div>
      </div>
       <div className='sortname'>
       <SortBy searchParams={searchParams} setSearchParams={setSearchParams}/>
       </div>
       
       </div>
  );
}
