// import "./styles.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import './ShowFilter.css'
export default function ShowFilter({buttonval ,state , setState , searchParams ,setSearchParams , genderId , occasionId , relationshipId , setGenderId , setOccasionId,setRelationshipId , sortBy , setSortBy}) {
  

  function Filters(filtervalue ,field, num , setNum){

    return(
      
      <div className="menu">
        <label style={{ fontWeight: "bold", fontFamily: "poppins" }}>
          {field}
      <div className="input-select-wrapper">
      <select
        value={num}
        
        onChange={(e) => {
          setNum(e.target.value)
          
        }}
        className="dropdown-select"
      >
        <option value="">None</option>
        {filtervalue.map((item) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      </div>
      </label>
      </div>
    )
  }
 function Display (){
  const handleClick = () => {

    setSearchParams({gender: genderId, occasion: occasionId, relationship:relationshipId,orderBy:sortBy})
     
   };

   const handleDelete = () => {
    setGenderId("");
    setOccasionId("");
    setRelationshipId("");
      setSearchParams({});
      buttonval(false);
   };

   return(
    <div className="button-row" style={{fontFamily:"poppins"}}>
    <button className="apply-button" onClick={handleClick}>
      Apply Filters
    </button>
    <button className="delete-button" onClick={handleDelete}>
      Clear Filters
    </button>
  </div> 
   );

 }
  
  return (
    <div className="select-component">
      {Display()}
    <div className="dropdown-container">
      {Filters(state.genders ,"Gender",genderId ,setGenderId)}
      {Filters(state.occasions ,"Occasion",occasionId,setOccasionId)}
      {Filters(state.relationships,"Relationships",relationshipId,setRelationshipId)}
    </div>
   
    </div>
  );
}
