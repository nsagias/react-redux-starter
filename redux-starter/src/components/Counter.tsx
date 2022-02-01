import { TypedUseSelectorHook, RootStateOrAny, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { RootState } from "../store/index";

const Counter: React.FC = () => {
 const counter = useSelector((state:RootState) => state.counter);


  const toggleCounterHandler = () => {}; 

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
