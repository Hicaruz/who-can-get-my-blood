import React from 'react';
import './app.css'

function App() {
  const BLOOD_TYPES = {
    "O−": ["O−", "O+", "A−", "A+", "B−", "B+", "AB−", "AB+"],
    "O+": ["O+", "A+", "B+", "AB+"],
    "A−": ["A−", "A+", "AB−", "AB+"],
    "A+": ["A+", "AB+"],
    "B−": ["B−", "B+", "AB−", "AB+"],
    "B+": ["B+", "AB+"],
    "AB−": ["AB−", "AB+"],
    "AB+": ["AB+"]
  };
  return (
    <>
      <div id="content">
        <h3>Select the donor blood type:</h3>
        <div id="blood_selector">
          {
            Object.keys(BLOOD_TYPES).map((type, key) => (<div key={key}>{type}</div>))
          }
        </div>
        <div id="blood_content">
          <div class="bar"></div>
          <div class="main_bag">
            <div class="blood"></div>
          </div>
        </div>
        <div id="center_via_c">
          <div class="center_via">
            <div class="blood_via"></div>
          </div>
        </div>
        <div id="humans">
          {
            Object.keys(BLOOD_TYPES)
              .map((type, key) => (
                <div key={key} class={`human ${key % 2 === 0 ? "left" : "right"}`}>
                  <div class="scribble"><span class="blood_type">{type}</span>
                    <div class="head"></div>
                    <div class="body"></div>
                  </div>
                  <div class="via"></div>
                  <div class="blood_via"></div>
                </div>
              ))
          }
        </div>
      </div>
    </>
  );
}

export default App;
