import React, { useState } from "react";
import menu from "./data";
import Buttons from "./components/Buttons";
import Title from "./components/Title";
import MenuItem from "./components/MenuItem";

function App() {
  const [data, setData] = useState(menu);
  const [menuItems, setMenuItems] = useState(data)



  return (
    <main>
      <section className="menu section">
        <Title />
        <Buttons setMenuItems={setMenuItems} data={data}/>
        <div className="section-center">
          {menuItems.map((dat) => {
            return <MenuItem {...dat} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
