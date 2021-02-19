import React from "react";
import { connect } from "react-redux";
import {smallcount,mediumcount,largecount,adultscount,childrencount,totalcount} from "../../Actions";

const Small = props => {
  const {dispatch,small,adults,children,count} = props;
  function decrement() {
    dispatch(smallcount(small - 1))
    dispatch(childrencount(children - 1))
    dispatch(totalcount(count - 150))
  }
  function increment() {
    dispatch(smallcount(small + 1))
    dispatch(childrencount(children + 1))
    dispatch(totalcount(count + 150))
  }
  return (
    <>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<lable>Small</lable>
      <button onClick={decrement} className={count <= 200 || small === 0 ? "least" : "dec"} disabled={count <= 200 || small <= 0}>-</button>
      {small}
      <button onClick={increment} className={count >= 1000 ? "most" : "inc"} disabled={count >= 1000 || small >= 6}>+</button><br/>
    </>
  );
};
export default connect(store => store)(Small);
