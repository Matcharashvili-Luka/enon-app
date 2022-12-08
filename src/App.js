import './App.css';
import React, { useState } from 'react'
import Header from './Header/Header';
import Product from './Product/Product';
import Sliders from './Sliders/Sliders';

function App() {
  const[open_category_menu, set_open_category_menu] = useState(false);

  return (
    <div className="App">
      <>
        <Header 
          set_open_category_menu={set_open_category_menu}
        />
        <Sliders />
        <Product 
          open_category_menu={open_category_menu}
          set_open_category_menu={set_open_category_menu}
        />
      </>
    </div>
  );
}

export default App;
