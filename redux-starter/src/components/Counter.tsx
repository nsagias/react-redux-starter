import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { RootState, AppDispatch } from "../store/index";

const Counter: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const counter = useSelector((state:RootState) => state.counter);

 
  const toggleCounterHandler = () => {}; 

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button>Increment</button>
        <button>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
