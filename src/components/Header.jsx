import React from 'react'
import FilterDropdown from './FilterDropdown'
import { BsCart4 } from 'react-icons/bs'
import {BiSearchAlt2} from 'react-icons/bi'
import {FiGift} from 'react-icons/fi'
import './Header.css';
const Header = ({state , setState , searchParams ,setSearchParams , genderId , occasionId , relationshipId , setGenderId , setOccasionId,setRelationshipId , sortBy , setSortBy}) => {
  return (
    <div className='main-header'>
        <div>
      <FilterDropdown state={state} setState = {setState} searchParams={searchParams} setSearchParams={setSearchParams} genderId={genderId}
      occasionId={occasionId} relationshipId={relationshipId} setGenderId={setGenderId}  setOccasionId={setOccasionId}
       setRelationshipId={setRelationshipId} sortBy={sortBy} setSortBy={setSortBy}/>
      </div>
      <span className='logo'>To&From</span>
      <div className='right-icons'>
        <div>{<BiSearchAlt2/>}</div>
      <div>{<FiGift/>}</div>
      <div>{<BsCart4/>}</div>
      
      </div>
      
    </div>
  )
}

export default Header
