import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
const col={
  "color":"rgb(250, 87, 59)"
}
  return (
    <Typewriter
      options={{
        strings: [
          "FULL STACK <span style={col}> WEB DEVELOPER</span>",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
