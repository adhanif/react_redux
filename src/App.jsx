import { useState } from "react";
import "./App.css";
import { increment, decrement } from "./reducers/counter";
import { useSelector, useDispatch } from "react-redux";
import { createTitle } from "./reducers/titles";

function App() {
  const dispatch = useDispatch();
  const counters = useSelector((state) => state.dani);
  const titles = useSelector((state) => state.titles);

  const handleIncrement = () => {
    dispatch(increment(1));
  };

  const handleDecrement = () => {
    dispatch(decrement(1));
  };

  const addTitle = (e) => {
    e.preventDefault();
    const title = e.target.text.value;
    console.log(title);

    dispatch(createTitle(title));
    e.target.text.value = "";
  };

  return (
    <>
      <form onSubmit={addTitle}>
        <div>
          <input name="text" />
        </div>
        <button type="submit">create</button>
      </form>
      <div>
        <>
          {titles.map((title, i) => {
            return <h1 key={i}>{title}</h1>;
          })}
        </>
      </div>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <p>{counters}</p>
    </>
  );
}

export default App;
