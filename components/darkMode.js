import React from "react";

export const toggleDarkMode = (event) => {
  console.log("click event", event);
};

function Theme() {
  // Declare a new state variable, which we'll call "count"

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
