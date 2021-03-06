//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const homeScore = 0;
  const awayScore = 0;
  const quarter = 1;

  const [homeCount, setHomeCount] = useState(homeScore);
  const [awayCount, setAwayCount] = useState(awayScore);
  const [qtrCount, setQtrCount] = useState(quarter);

  function changeAway(e){
    e.target.style.background = "goldenrod";
    e.target.style.color="black";
  }
  function normAway(e){
    e.target.style.background = "";
    e.target.style.color="";
  }

  return (
    <div className="container">
      <h1 className="header">Game of the Year</h1>
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Panthers</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeCount}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Steelers</h2>
            <div className="away__score">{awayCount}</div>
          </div>
        </div>
        <BottomRow  qtrStatus = {qtrCount}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={()=>setHomeCount(homeCount + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={()=>setHomeCount(homeCount + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button 
          className="awayButtons__touchdown" 
          onClick={()=>setAwayCount(awayCount + 7)}
          onMouseEnter={changeAway}
          onMouseLeave={normAway}
          >Away Touchdown</button>
          <button 
          className="awayButtons__fieldGoal" 
          onClick={()=>setAwayCount(awayCount + 3)} 
          onMouseEnter={changeAway}
          onMouseLeave={normAway}
          >Away Field Goal</button>
        </div>
        <div className="qtrButton">
          <button className="qtrButton__quarterbutton" onClick={()=>{
            if(qtrCount < 4){
              setQtrCount(qtrCount + 1)
            }else{
              setQtrCount(1);
            };
          }}>Next Quarter</button>
        </div>
      </section>
    </div>
  );
}

export default App;
