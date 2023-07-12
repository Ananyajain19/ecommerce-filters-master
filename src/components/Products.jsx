import React from 'react'
import './Products.css'

function AppliedFilter({sortBy,genderId,occasionId,relationshipId,setGenderId,setOccasionId,setRelationshipId,setSearchParams, state, setSortBy, searchParams}){
  const handleDelete = () => {
   setGenderId("")
   setOccasionId("")
   setRelationshipId("")
    setSearchParams({});
  };
  const queryparam = window.location.search;
  if(queryparam.length>1){
    return(
      <div className='filterscreen'>
      <div style={{fontWeight:'bold'}}>
        Filters :
      </div>
      <div className='filtername'>
      <ValueFromUrl data = {state.genders} field = {"gender"} searchParams={searchParams} setSearchParams={setSearchParams} setSortBy={setSortBy} setId={setGenderId}/>
      <ValueFromUrl data = {state.occasions} field = {"occasion"} searchParams={searchParams} setSearchParams={setSearchParams} setSortBy={setSortBy} setId={setOccasionId}/>
      <ValueFromUrl data = {state.relationships} field = {"relationship"} searchParams={searchParams} setSearchParams={setSearchParams} setSortBy={setSortBy} setId={setRelationshipId}/>
       <SortBy searchParams={searchParams} setSearchParams={setSearchParams} setSortBy={setSortBy}/>
      </div>
     
      
      <div> <button className="clear-button" onClick={handleDelete}>
          Clear Filters
        </button></div>
      </div>
    ) 
    } else{
      return
  }
}

function ValueFromUrl ({data,field ,searchParams ,setSearchParams, setSortBy,setId}){

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
          setId("")
          searchParams.delete(field)
          setSearchParams(searchParams)
        }}>&times;</div>
      </span>
      
  );
}

function SortBy({searchParams,setSearchParams,setSortBy}){
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
    } else if(findSortby==="discount_percentage"){
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
        setSortBy("")
      }}>&times;</div>
      </span>
    );
}
export default function Products({state , setState , searchParams ,setSearchParams , genderId , occasionId , relationshipId , setGenderId , setOccasionId,setRelationshipId , sortBy , setSortBy}) {
  return (
    <div className='show-filters'>
    <div className='Product-screen'>
    <AppliedFilter sortBy={sortBy} genderId={genderId} occasionId={occasionId} relationshipId={relationshipId} state={state} setGenderId={setGenderId} setOccasionId={setOccasionId} setRelationshipId={setRelationshipId} setSearchParams={setSearchParams} searchParams={searchParams} setSortBy={setSortBy}  />
      
      </div>
      
       
       </div>
  );
}
