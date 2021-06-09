import React from "react";

const Buttons = ({ setMenuItems, data, categories }) => {
  
  
  const filterItems = (filterKeyword) => {
    if (filterKeyword === data) {
       setMenuItems(data)
    }else {
      const filteredData = data.filter((dat) => dat.category === filterKeyword);
      setMenuItems(filteredData);
    }

    
  };

  return (
    <div className="btn-container">
      {categories.map(category => {
        return (
          <button key={category} onClick={() => filterItems(category)}  className="filter-btn">{category}</button>
        )
      })}
    </div>
  );

  // return (
  //   <div>
  //     <div className="btn-container">
  //       <button onClick={() => setMenuItems(data)}className="filter-btn">All</button>
  //       <button onClick={() => setMenuItems(filterItems('breakfast'))}  className="filter-btn">Breakfast</button>
  //       <button onClick={() => setMenuItems(filterItems('lunch'))}  className="filter-btn">Lunch</button>
  //       <button onClick={() => setMenuItems(filterItems('shakes'))} className="filter-btn">Shakes</button>
  //     </div>
  //   </div>
  // );
};

export default Buttons;
