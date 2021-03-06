import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/index";
// import { INCREMENT, INCREASE, DECREMENT, TOGGLE } from "../constants";
import { counterActions } from "../store/counter";
import { showCounterActions } from "../store/showCounter";
import classes from "./Counter.module.css";


const Counter: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const counter = useSelector((state: RootState) => state.counter.counter);
  const show = useSelector((state: RootState) => state.showCounter.showCounter);

  // const incrementHandler = () => {
  //   dispatch({ type: INCREMENT , payload: 0 });
  // };
  const incrementHandler = () => {
    dispatch( counterActions.increment() );
  };

  // const increaseHanlder = () => {
  //   dispatch({ type: INCREASE, payload: 10});
  // }
  const increaseHanlder = () => {
    dispatch( counterActions.increase(10));
  }

  // const decrementHandler = () => {
  //   dispatch({ type: DECREMENT, payload: 0});
  // };
  const decrementHandler = () => {
    dispatch( counterActions.decrement() );
  };


  const toggleCounterHandler = () => {
    // dispatch({ type: TOGGLE, payload: 0});
    dispatch( showCounterActions.toggleCounter() );
  }; 

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div> }
      
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHanlder}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
