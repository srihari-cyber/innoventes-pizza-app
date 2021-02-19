import React from "react";
import { connect } from "react-redux";
import {mediumcount,adultscount,totalcount} from "../Actions";

const Adults = props => {
  const {adults,dispatch,medium,count} = props
  function decrement(){
    dispatch(adultscount(adults - 1))
    dispatch(mediumcount(medium - 1))
    dispatch(totalcount(count - 200))
  }
  function increment(){
    dispatch(adultscount(adults + 1))
    dispatch(mediumcount(medium + 1))
    dispatch(totalcount(count + 200))
  }


  return (
    <div className="betterview">
      &nbsp;&nbsp;&nbsp;<lable>Adults</lable>
      <button onClick={decrement} className={count <= 200 || adults === 1 || medium <= 1 ? "least" : "dec"} disabled={count <= 200 || adults <= 1} >-</button>
      {adults}
      <button onClick={increment} className={count >= 1000 ? "most" : "inc"} disabled={count >= 1000 || adults >= 5}>+</button>
    </div>
  );
};
export default connect(store => store)(Adults);
