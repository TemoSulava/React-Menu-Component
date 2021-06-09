import React, { useState } from "react";
import menu from "./data";
import Buttons from "./components/Buttons";
import Title from "./components/Title";
import MenuItem from "./components/MenuItem";

const allCategories = ['all', ...new Set(menu.map((data) => data.category))];
console.log(allCategories)

function App() {
  const [data, setData] = useState(menu);
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  return (
    <main>
      <section className="menu section">
        <Title />
        <Buttons setMenuItems={setMenuItems} data={data} categories={categories} />
        <div className="section-center">
          {menuItems.map((dat) => {
            return <MenuItem key={dat.id} {...dat} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
