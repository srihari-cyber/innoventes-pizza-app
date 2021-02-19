import React from "react";
import { connect } from "react-redux";
import {smallcount,mediumcount,largecount,adultscount,childrencount,totalcount} from "../../Actions";

const Large = props => {
  const {dispatch,large,adults,children,count} = props;
  function decrement() {
    dispatch(largecount(large - 1))
    dispatch(adultscount(adults - 2))
    dispatch(totalcount(count - 300))
  }
  function increment() {
    dispatch(largecount(large + 1))
    dispatch(adultscount(adults + 2))
    dispatch(totalcount(count + 300))
  }


  return (
    <>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<lable>Large</lable>
      <button onClick={decrement} className={count <= 200 || large === 0? "least" : "dec"} disabled={count <= 200 || large <= 0}  >-</button>
      {large}
      <button onClick={increment} className={count >= 1000 ? "most" : "inc"} disabled={count >= 1000 || large >= 3} >+</button>
    </>
  );
};
export default connect(store => store)(Large);
