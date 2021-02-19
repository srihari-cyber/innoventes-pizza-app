import React from "react";
import { connect } from "react-redux";
import {smallcount,childrencount,totalcount} from "../Actions";
const Children = props => {
  console.log("children props",props)
  const {dispatch,children,small,count} = props
  function decrement(){
    dispatch(childrencount(children - 1))
    dispatch(smallcount(small - 1))
    dispatch(totalcount(count - 150))
  }
  function increment(){
    dispatch(childrencount(children + 1))
    dispatch(smallcount(small + 1))
    dispatch(totalcount(count + 150))
  }

  return (
    <div className="betterview">
      <lable>Children</lable>
      <button onClick={decrement} className={count <= 200 || children <= 0 ? "least" : "dec"} disabled={count <= 200 || children <= 0} >-</button>
      {children}
      <button onClick={increment} className={count >= 1000 ? "most" : "inc"} disabled={count >= 1000 || children >= 6}>+</button>
    </div>
  );
};
export default connect(store => store)(Children);
