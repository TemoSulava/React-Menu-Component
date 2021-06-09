import React from 'react'

const Buttons = ({ setMenuItems, data }) => {


  const filterItems = (filterKeyword) => {
    return data.filter(dat => dat.category === filterKeyword)
  }

  return (
    <div>
      <div className="btn-container">
        <button onClick={() => setMenuItems(data)}className="filter-btn">All</button>
        <button onClick={() => setMenuItems(filterItems('breakfast'))}  className="filter-btn">Breakfast</button>
        <button onClick={() => setMenuItems(filterItems('lunch'))}  className="filter-btn">Lunch</button>
        <button onClick={() => setMenuItems(filterItems('shakes'))} className="filter-btn">Shakes</button>
      </div>
    </div>
  );
}

export default Buttons;
