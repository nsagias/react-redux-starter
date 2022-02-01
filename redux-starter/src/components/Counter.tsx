import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/index";
// import { IIncrement } from "../counter.model";
import classes from "./Counter.module.css";
import { INCREMENT, DECREMENT } from "../constants";



const Counter: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const counter = useSelector((state:RootState) => state.counter);

  const incrementHandler = () => {
    dispatch( {type: INCREMENT});
  };

  const decrementHandler = () => {
    dispatch( {type: DECREMENT});
  };

  const toggleCounterHandler = () => {}; 

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
