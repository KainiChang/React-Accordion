import React from 'react';
import ReactDOM from 'react-dom/client';
import './Accordion.css';
import Accordion from "./Accordion"



const root = ReactDOM.createRoot(document.getElementById('root'));
// const list = ["Default", "Featured", "Latest", "Following", "BookMarked"];
//I can not pass the list
root.render(
  <div className='accordionContainer'>
    <Accordion isFirst={true} title="Sort Home Feed By Featured Posts" key="1"
    // lists = {list} // 
    />
    <Accordion isFirst={false} title="More Things to Do" key="2"/>
  </div>
);

