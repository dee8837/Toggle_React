import { useState } from "react";

const DarkMode = () => {
  const [isLight, setIsLight] = useState(true);
  function onClickHandler() {
    setIsLight(!isLight);
    console.log(isLight);
  }
  return (
    // <div className={isLight===true?"light-bg":"dark-bg"}>
    //     <div className={isLight===true?"light-text":"dark-text"}>Toggle</div>
    //     <button onClick={()=>{setLight((preValue)=>{return ! preValue})}}>ClickMe</button>

    // </div>
    <>
    <div className="whole">
      <div className={isLight === true ? "light" : "dark"}>
        <div className="light-text">
          <h1>Overreacted</h1>
        </div>
        <div className="Dark-text">
          <button type="button" onClick={onClickHandler}>
            Toggle
          </button>
          <h2>The WET Codebase</h2>
          <i>Sunday 4th 11am min read</i>
          <br />
          <i>Come waste your timr with me</i>

          <h2>Goodbye,Clean Code</h2>
          <i>Friday 22nd,2019 5 min read</i>
          <br />
          <i>Let Clean guide you .Then let it go</i>

          <h2>my decade In Review</h2>
          <i>Sunday 22nd,2019 5 min read</i>
          <br />
          <i>Let Clean guide you .A person reflection</i>

          <h2>What Are The React Team Principles</h2>
          <i>Thrusday 04th,2019 5 min read</i>
          <br />
          <i>Let Clean guide you .Then let it go</i>
        </div>
      </div>
      </div>
    </>
  );
};

export default DarkMode;
