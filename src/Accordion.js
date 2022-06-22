import React, { useState, useEffect, useRef } from 'react';
import './Accordion.css';

import Chevron from "./chevron.svg"

function Accordion(props) {

  const [toggle, setToggle] = useState(false)
  const [heightEl, setHeightEl] = useState(false)

  const refHeight = useRef()

  useEffect(() => {

    setHeightEl(`${refHeight.current.scrollHeight}px`)
  }, [])

  const toggleState = () => {
    setToggle(!toggle)
  }

  const localList = ["Default", "Featured", "Latest", "Following", "BookMarked"]

  const [tickState, setTickState] = useState(-1)


  return (

    <div className='accordion'>
      <button className={props.isFirst ? 'accordion-visible' : 'accordion-visible2'}
        onClick={toggleState}>
        <img style={{ width: "20px", height: "20px", marginLeft: "0px" }} src="./images/2.jpeg" alt="failure" />
        <p className='accordin__title'> {props.title}</p>
        <img className={toggle && "active"} src={Chevron} alt="failure" />
      </button>

      <div className={toggle ? "accordion-toggle animated" : 'accordion-toggle'}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
        ref={refHeight}>
        {
          localList.map((item,index) => {
            return (

              <div className="accordion--flexOption1">
                <svg
                className={tickState===index?"accordion--listType--hovered":"accordion--listType"}
                width="20px"
                height="20px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
              </svg>
                 <div className="accordion--flexOption2"  onMouseEnter={()=>setTickState(index)} onMouseLeave={()=>setTickState(-1)}>{item}
                 </div>
              </div>


            );
          })
        }
      </div>
    </div>

  );
}

export default Accordion;
