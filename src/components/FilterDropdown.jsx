import React, { useState } from "react";
import ShowFilter from "./ShowFilter";
import "./FilterDropdown.css";
import { RiArrowDropDownLine } from "react-icons/ri";
const FilterDropdown = ({
  state,
  setState,
  searchParams,
  setSearchParams,
  genderId,
  occasionId,
  relationshipId,
  setGenderId,
  setOccasionId,
  setRelationshipId,
  sortBy,
  setSortBy,
}) => {
  const [formVisible, setFormVisible] = useState(false);

  const handleButtonClick = () => {
    setFormVisible(true);
  };

  const handleClose = () => {
    setFormVisible(false);
  };

  return (
    <>
      <button
        className={`form-button ${formVisible ? "active" : ""}`}
        onClick={handleButtonClick}
      >
        Gift Filter <span className="arrow">{<RiArrowDropDownLine />}</span>
      </button>
      <select
        className="sort-button"
        value={sortBy}
        onChange={(e) => {
          searchParams.delete("orderBy");
          setSortBy(e.target.value);
          searchParams.append("orderby", e.target.value);
          setSearchParams(searchParams);
        }}
      >
        <option value={""} className="sortby-options">
          Sort By
        </option>
        <option value={"priceASC"} className="sortby-options">
          Price: Low to High
        </option>
        <option value={"priceDSC"} className="sortby-options">
          Price: High to Low
        </option>
        <option value={"hotgifts"} className="sortby-options">
          Hot Gifts
        </option>
        <option value={"newest"} className="sortby-options">
          Newest
        </option>
        <option value={"discount_percentage"} className="sortby-options">
          Promotions
        </option>
        <option value={"toandfrom"} className="sortby-options">
          To&From Marketplace
        </option>
      </select>
      {formVisible && (
        <div className="modal">
          <div className="modal-content">
            <span style={{ fontWeight: "bold" }}>Filters</span>
            <span className="close" onClick={handleClose}>
              &times;
            </span>

            <ShowFilter
              buttonval={setFormVisible}
              state={state}
              setState={setState}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              genderId={genderId}
              occasionId={occasionId}
              relationshipId={relationshipId}
              setGenderId={setGenderId}
              setOccasionId={setOccasionId}
              setRelationshipId={setRelationshipId}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FilterDropdown;
