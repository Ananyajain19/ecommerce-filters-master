import React from "react";
import Navbar from './components/Navbar';

import Header from "./components/Header";
import Products from "./components/Products";
import { useState ,useEffect } from "react";
import { useSearchParams } from "react-router-dom";
function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [sortBy,setSortBy] =useState(searchParams.get("gender")??"")
  const [genderId , setGenderId] = useState(searchParams.get("gender")??"");
  const [occasionId,setOccasionId] = useState(searchParams.get("occasion")??"");
  const [relationshipId , setRelationshipId] =useState(searchParams.get("relationship")??"");

  const [state, setState] = useState({
    genders: [],
     occasions :[],
    relationships: []
  });
  
  useEffect(() => {
    (async () => {
      const [genders, occasions, relationships] = await Promise.all([
        fetch(
          `https://api.toandfrom.com/v2/gender?all=true&status=activate`
        )
          .then((res) => res.json())
          .then((res) => res.data),
        fetch(`https://api.toandfrom.com/v2/occasion?all=true&status=activate`)
          .then((res) => res.json())
          .then((res) => res.data),
        fetch(`https://api.toandfrom.com/v2/relationship?all=true&status=activate`)
          .then((res) => res.json())
          .then((res) => res.data)
      ]);
      setState({
        genders,
        occasions,
        relationships
      });
    })();
  }, []);

  return (
    <div className="App">
   
      <Navbar />
      <Header state={state} setState = {setState} searchParams={searchParams} setSearchParams={setSearchParams} genderId={genderId}
      occasionId={occasionId} relationshipId={relationshipId} setGenderId={setGenderId}  setOccasionId={setOccasionId}
       setRelationshipId={setRelationshipId} sortBy={sortBy} setSortBy={setSortBy}/>

      <Products state={state} setState = {setState} searchParams={searchParams} setSearchParams={setSearchParams} genderId={genderId}
      occasionId={occasionId} relationshipId={relationshipId} setGenderId={setGenderId}  setOccasionId={setOccasionId}
       setRelationshipId={setRelationshipId} sortBy={sortBy} setSortBy={setSortBy} />
      
    </div>
  );
}

export default App;

